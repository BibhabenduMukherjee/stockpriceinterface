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
type StockDataInfoType = {
    symbol  : string,
    name : string,
    type : string,
    price: number,
    open: string,
    high: string,
    low: string,
    volume: number,
    about : string,
    company_ceo: string,
    company_dividend_yield : number,
    wikipedia_url :string,
    company_employees : number,
    exchange : string,
    year_high : number,
    year_low : number,
    company_market_cap : number,
    company_founded_date : string,
    company_website : string,
}

type News = {
    article_title : string,
    article_url : string,
    article_photo_url : string,
    source : string,
    post_time_utc : string,
}
type StockNewsInfoType= {
    symbol: string
    type: string,
    news : News[]
}

type StockNewsInfo = {
    data : StockNewsInfoType
}
type StockInfo = {
    data : StockDataInfoType
}

