type CsvUploadType = {
    cols : string[],
    dfCloseVals: number[],
    dfColVals : (number | string )[],
    dfDateVals : string[],
    fileName : string,
    totalEpochs?:string,
    fileUploaded : boolean,
    status :string


}

type SingleCollection = {
    code : string,
    name : string,
    lastSale : string,
    netChange : string,
    Change : string,
    MarketCap : string,

}

