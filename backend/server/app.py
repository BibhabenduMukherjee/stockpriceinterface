import csv

from flask import Flask, request, jsonify, send_file ,send_from_directory
from flask_cors import CORS
import glob
import json

app = Flask("Stock Price Prediction")
CORS(app)

df = None
cols, dateColName, closeColName = None, None, None
train_size = 0.80
totalEpochs = 4

session = {
    "training": {
        "status": "ready",
        "fileUploaded": False,
        "fileName": None,
        "totalEpochs": totalEpochs
    },
    "prediction": {
        "status": "ready",
        "preTrainedModelNames": None
    }
}

sessioninfopre = {
    "pretrained":
        {
            "status": "ok"
        }}


def updateEpochs(epoch):
    global session

    session['training']['epochs'] = epoch + 1


from api import *


@app.route("/")
def index():
    return "Welcome to Stock Price Prediction API"

@app.route('/pretrainedModel')
def get_user_files():
    userid = request.args.get("userId")
    user_folder = os.path.join(f"{os.getcwd()}/pretrained", userid)
    if os.path.exists(user_folder) and os.path.isdir(user_folder):
        files = os.listdir(user_folder)

        return jsonify({'files': files}), 200
    else:
        return jsonify({'error': 'User folder not found'}), 404


@app.route('/get-csv' , methods=['GET'])
def get_csv():
    # Construct the full path to the file
    userId = request.args.get("userId")
    fileName = request.args.get("fileName")
    file_path = f"/datasets/{userId}/{fileName}.csv"
    print(file_path)
    file_path = os.path.join('datasets', f'{userId}/{fileName}.csv')
    if not os.path.exists(file_path):
        return "File not found", 404

    # Check if the file exists
    try:

        return send_file(file_path,as_attachment=False,mimetype="text/csv")
    except FileNotFoundError:
        return "File not found", 404


@app.route('/download_data', methods=['GET'])
def download_data():
    filename = request.args.get('filename')
    if not filename:
        return "Filename not provided", 400

    file_path = os.path.join('datasets', f'{filename}.csv')

    if not os.path.exists(file_path):
        return "File not found", 404

    return send_file(file_path, as_attachment=True)


@app.route('/modelname', methods=['GET'])
def get_model_name():
    # Access the 'a' query parameter from the URL
    global sessioninfopre
    anyname = request.args.get('a')
    print(anyname)
    df = pd.read_csv('./datasets/' + anyname + '.csv')
    print(df.shape)
    opencol, trunovercol, datecol, closecol, highcol = getRequiredColumnsForPredefined(df)

    if anyname:
        dfOpenValPre = []
        dfCloseValPre = []
        dfDateValPre = []
        dfTurnoverValPre = []
        dfHighValPre = []

        for row in df[datecol].values:
            dfDateValPre.append(row)
        for row in df[opencol].values:
            dfOpenValPre.append(row)
        for row in df[trunovercol].values:
            dfTurnoverValPre.append(row)
        for row in df[closecol].values:
            dfCloseValPre.append(row)
        for row in df[highcol].values:
            dfHighValPre.append(row)

        dfTurnoverValPre = [float(x) for x in dfTurnoverValPre]

        sessioninfopre['pretrained']['dates'] = dfDateValPre[0:400]
        sessioninfopre['pretrained']['openval'] = dfOpenValPre[0:400]
        sessioninfopre['pretrained']['turnover'] = dfTurnoverValPre[0:400]
        sessioninfopre['pretrained']['closeval'] = dfCloseValPre[0:400]
        sessioninfopre['pretrained']['highval'] = dfHighValPre[0:400]

        return sessioninfopre["pretrained"]
    else:
        return 'No model name provided in the query parameter.'
    # return  "hello"


@app.route('/save_data', methods=['POST'])
def save_data():
    try:
        data = request.get_json()  # Get the JSON data from the request
        filename = request.args.get('filename')  # Get the filename from the request
        username = request.args.get('userid')
        print(data)
        if not filename:
            return "Filename not provided", 400

        # Specify the directory where you want to save the CSV file
        save_directory = f"datasets/{username}"
        if not os.path.exists(save_directory):
            os.makedirs(save_directory)

        # Create the full path for the CSV file
        file_path = os.path.join(save_directory, f'{filename}.csv')

        # Check if the file already exists
        if os.path.exists(file_path):
            return "File already exists", 409  # Conflict status code

        # Write data to a CSV file
        with open(file_path, 'w', newline='') as file:
            csv_writer = csv.DictWriter(file, fieldnames=data[0].keys())
            csv_writer.writeheader()
            for row in data:
                csv_writer.writerow(row)

        return "Data saved as CSV successfully", 200

    except Exception as e:
        return str(e), 500


@app.route("/upload", methods=['POST', 'GET'])
def upload():
    if (request.method == "POST"):
        global session, df, cols, dateColName, closeColName
        print(request)
        # print(request.files['file'])
        df = pd.read_csv(request.files['file'])
        df = df.dropna()

        cols, dateColName, closeColName = getRequiredColumns(df)
        print(cols)
        dfColVals = []
        dfDateVals = []
        dfCloseVals = []
        for row in df[[dateColName] + cols].values:
            dfColVals.append(list(row))
            dfCloseVals.append(row[4])
            dfDateVals.append(row[0])

        session['training']['fileUploaded'] = True
        session['training']['fileName'] = request.files['file'].filename[:-4]
        session['training']['cols'] = [dateColName] + cols
        session['training']['dfColVals'] = dfColVals
        session['training']['dfCloseVals'] = dfCloseVals
        session['training']['dfDateVals'] = dfDateVals

        return session['training']
    else:
        return "This API accepts only POST requests"


@app.route("/startTrainingAd", methods=["POST"])
def startTrainingAd():
    if request.method == "POST":
        pass
        fileName = request.form['fileName']
        session['training']['status'] = "training"
        session['training']['epochs'] = 0

        model_data = LSTMAlgorithmTwo(fileName, train_size)
        session['training']['status'] = "trainingCompleted"

        return session['training']

    else:

        return "This api accept only post request"


@app.route("/startTraining", methods=['POST', 'GET'])
def startTraining():
    if (request.method == "POST"):
        global session, df

        fileName = request.form['fileName']
        userId = request.form['userId']

        print(fileName , userId)

        # df.to_csv('datasets/' + fileName + '.csv')

        session['training']['status'] = "training"
        session['training']['epochs'] = 0

        # json = LMS(df, closeColName, next_days=10, epochs=100, updateEpochs=updateEpochs)
        model = LSTMAlgorithm(fileName, userId, train_size, totalEpochs, updateEpochs=updateEpochs)

        session['training']['status'] = "trainingCompleted"

        return session['training']
    else:
        return "This API accepts only POST requests"


@app.route("/trainingStatus", methods=['POST', 'GET'])
def trainingStatus():
    if (request.method == "POST"):
        return session['training']
    else:
        return "This API accepts only POST requests"


# Prediction Page

@app.route("/getPreTrainedModels", methods=['POST', 'GET'])
def getPreTrainedModels():
    if (request.method == "POST"):
        global session

        files = glob.glob("./pretrained/*.h5")

        for i in range(len(files)):
            files[i] = files[i][13:-3]

        session['prediction']['preTrainedModelNames'] = files

        return session['prediction']
    else:
        return "This API accepts only POST requests"


@app.route("/getPredictionsAd", methods=['POST', 'GET'])
def getPredictionsAd():
    if request.method == "POST":
        global session

        modelName = request.form['modelName']
        session['prediction']['modelName'] = modelName

        # ---- ----- -- -- - - - -- -- - -- - - - - BLOCK 1 , 2 , 3

        modelData = getPredictonsFromModelAd(modelName, train_size)
        session['prediction']['modelData'] = modelData

        return session['prediction']
    else:
        return "This API accepts only POST requests"


@app.route("/getPredictions", methods=['POST', 'GET'])
def getPredictions():
    if request.method == "POST":
        global session

        modelName = request.form['modelName']
        userId = request.form['userId']
        session['prediction']['modelName'] = modelName

        # ---- ----- -- -- - - - -- -- - -- - - - - BLOCK 1 , 2 , 3

        modelData = getPredictonsFromModel(modelName, userId, train_size)
        session['prediction']['modelData'] = modelData

        return session['prediction']
    else:
        return "This API accepts only POST requests"


@app.route("/getManualPrediction", methods=['POST', 'GET'])
def getManualPrediction():
    if request.method == "POST":
        global session

        fileName = request.form['fileName']

        openValue = request.form['openValue']
        highValue = request.form['highValue']
        lowValue = request.form['lowValue']
        volumeValue = request.form['volumeValue']

        prediction = getManualPredictionForModel(fileName, train_size, openValue, highValue, lowValue, volumeValue)

        session['prediction']['manualPrediction'] = str(prediction)

        return session['prediction']
    else:
        return "This API accepts only POST requests"


if __name__ == '__main__':
    debug = False
    # debug = True
    port = 3001

    app.run(
        host="0.0.0.0",
        debug=debug,
        port=port
    )
