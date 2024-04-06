import {
  datetimeapexformatter,
  manipulateDate,
  rangeclosevalformatter,
  rsiformattor,
} from "@/dateformaterforapexdatetime";
import StockPercentage from "@/src/app/components/prediction/StockPercentage";
import axios from "axios";
import dynamic from "next/dynamic";
import React from "react";

const PredictedGraph = dynamic(
  () => import("@/src/app/components/prediction/PredictedGraph"),
  {
    ssr: false,
  }
);

const PredictedGraphBar = dynamic(
  () => import("@/src/app/components/prediction/PredictedGraphBar"),
  {
    ssr: false,
  }
);

const RsiLineChart = dynamic(
  () => import("@/src/app/components/RsiLineChart"),
  {
    ssr: false,
  }
);
const RangeOfClosePrice = dynamic(
  () => import("@/src/app/components/prediction/RangeOfClosePrice"),
  { ssr: false }
);
async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL!;
  let filename;
  //const url = new URL(requestHeaders.get('x-forwarded-host') + Request.url());
  const s = new FormData();
  const model = searchParams["modelname"] as string;
  const u = searchParams["userid"];
  let response;
  if (model.startsWith("Ad")) {
    // call the ad mode
    filename = model.substring(3);
    s.append("modelName", `${model}`);
    s.append("userId", `${u}`);
    s.append("fileName", `${filename}`);
    console.log("Advanced call");

    response = await axios.post(`${url}/getPredictionsAd`, s);
    console.log(response.data.modelData.predictions.predictedData.length);
    console.log("DATE" , response?.data?.modelData.predictions.dates.length);
    
    
  } else {
    filename = model;
    s.append("modelName", `${model}`);
    s.append("userId", `${u}`);
    console.log("Normal call");
    response = await axios.post(`${url}/getPredictions`, s);
    console.log(response.data.modelData.predictions.predictedData.length);
    console.log("DATE" , response?.data?.modelData.predictions.dates);
    
  }
  const [dates, lastDate] = datetimeapexformatter(
    response?.data?.modelData.predictions.dates
  );
  const percentage = await axios.get(
    `${url}/percentage_change?fileName=${filename}&userId=${u}`
  );
  const movingAvg = await axios.get(
    `${url}/moving_average?fileName=${filename}&userId=${u}`
  );
  const rsi = await axios.get(
    `${url}/calculate_rsi?fileName=${filename}&userId=${u}`
  );
  const rangecloseval = await axios.get(
    `${url}/calculate_percentage?fileName=${filename}&userId=${u}`
  );

  const rsivalues = rsiformattor(rsi.data);
  const rangeformattedvalue = rangeclosevalformatter(rangecloseval.data.data)
  //console.log(rangeformattedvalue);
  
 
  

  return (
    <div className="flex flex-col ">
      <StockPercentage
        one_month_change={percentage?.data["1_month_change"]}
        two_weeks_change={percentage?.data["2_weeks_change"]}
        three_months_change={percentage?.data["3_months_change"]}
      />
      <PredictedGraph
        modelName={searchParams["modelname"]}
        lastdate={lastDate}
        dates={dates}
        data={response?.data?.modelData}
      />
      <div className="mt-10  ">
        <PredictedGraphBar data={movingAvg.data} />
        <div>
          <p className="text-3xl text-center">RSI Value for 14 days</p>
        </div>
        <section className=" h-[400px] mt-6 ">
          <div className="max-w-6xl  grid gap-2 grid-cols-1 md:grid-cols-2 mx-auto  ">
            <div className="w-[620px] mt-5   h-[400px] mx-auto">
              <RsiLineChart data={rsivalues} />
            </div>
            <div className="w-[390px] mt-5 h-[400px] mx-auto ">
              <RangeOfClosePrice data = {rangeformattedvalue} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
