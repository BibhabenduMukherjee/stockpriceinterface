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
import {Code} from "../../../../../stocks"
import StockGenInfo from "@/src/app/components/prediction/StockGenInfo";
import { ArrowUp, MoveUpRight } from "lucide-react";

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
  const authserverurl = process.env.AUTH_SERVER_URL!
  let filename;
  //const url = new URL(requestHeaders.get('x-forwarded-host') + Request.url());
  const s = new FormData();
  const model = searchParams["modelname"] as string;
  const u = searchParams["userid"];
  let response;
  let stockinfo;
  let stocknewsinfo;
  if (model.startsWith("Ad")) {
    // call the ad mode
    filename = model.substring(3);
    const code = filename.split("_")[1]
    //console.log(Code[code]);
    
    s.append("modelName", `${model}`);
    s.append("userId", `${u}`);
    s.append("fileName", `${filename}`);
    console.log("Advanced call");

    response = await axios.post(`${url}/getPredictionsAd`, s);
    stockinfo =  await axios.post(`${authserverurl}/getstockinfo` , {code : code})
    stocknewsinfo =  await axios.post(`${authserverurl}/getstocknews` , {code :code})
    // console.log(response.data.modelData.predictions.predictedData.length);
    // console.log("DATE" , response?.data?.modelData.predictions.dates.length);
    stockinfo = stockinfo.data.info as StockInfo
    stocknewsinfo = stocknewsinfo.data.info as StockNewsInfo
   
    
  } else {
    filename = model;
    const code = filename.split("_")[1]
    console.log(code);
    
    
    s.append("modelName", `${model}`);
    s.append("userId", `${u}`);
    //console.log("Normal call");
    response = await axios.post(`${url}/getPredictions`, s);
    stockinfo =  await axios.post(`${authserverurl}/getstockinfo` , {code : code})
    stocknewsinfo =  await axios.post(`${authserverurl}/getstocknews` , {code : code})
    // console.log(response.data.modelData.predictions.predictedData.length);
    // console.log("DATE" , response?.data?.modelData.predictions.dates);

    stockinfo = stockinfo.data.info as StockInfo
    stocknewsinfo = stocknewsinfo.data.info as StockNewsInfo
    
    
    
    
    
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
        price = {response?.data?.modelData.predictions.realData[0]}
        accuracy = {response?.data.modelData.predictions.accuracy}
        name = {stockinfo.data.name}
        p = {stockinfo.data.price}
        wikiurl={stockinfo.data.company_website}
        ab = {stockinfo.data.about}
        mse = {response?.data?.modelData.predictions.mse}
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
            
            <div className="md:w-[650px] w-[425px] mt-5 flex flex-col  overflow-y-scroll   h-[500px] mx-auto">
            <div className="w-full p-4 flex flex-col   ">
                {stocknewsinfo.data.news.map((item,index)=>(<div key={index}>
                  <div className=" flex flex-col p-2  bg-green-100/40  ">
                    <div className= "flex space-x-2  w-full items-center ">
                       <div className = 'w-[50px]  rounded-full'>
                         <img src={item.article_photo_url} alt="" />
                       </div>

                       <div className = 'w-full'>
                        <p className = "font-semibold text-md hover:underline underline-offset-1 ">
                          <a href= {item.article_url}>
                            {item.article_title}
                          </a>
                          </p>
                       </div>

                    </div>
                     <p className="text-[12px] ml-[49px]">
                        {item.post_time_utc}
                     </p>
                </div>
                </div>))}

               
               
             </div>
            </div>
            
            <div className="w-[400px] mt-5   h-[400px] mx-auto">
            <div className=" bg-gray-400/10 mt-5 h-[400px] mx-auto ">
              <div className = "flex flex-col  p-2">
                

                <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px]  p-2"> 
                        <div className = "ml-[10px] ">
                        Company CEO
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px] ">
                         <p>{stockinfo.data.company_ceo}</p>
                        </div>
                    </div>
                </div>



                <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                         Founded In
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] ">
                          {stockinfo.data.company_founded_date}
                          </p>
                         
                        </div>
                    </div>
                </div>

                <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                         Number of emp
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] ">
                          {stockinfo.data.company_employees}
                          </p>
                         
                        </div>
                    </div>
                </div>

                <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                         Market Cap
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] ">
                          {stockinfo.data.company_market_cap}
                          </p>
                         
                        </div>
                    </div>
                </div>
                <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                         Dividend yield In
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] ">
                          {stockinfo.data.company_dividend_yield}
                          </p>
                         
                        </div>
                    </div>
                </div>
                 <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                        Exchange
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] ">
                          {stockinfo.data.exchange}
                          </p>
                         
                        </div>
                    </div>
                </div>
                <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                          High
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px] flex items-center space-x-1 ">
                          <div>
                          <p className="ml-[1px] text-green-600 ">
                          {stockinfo.data.high}
                          </p>
                          </div>
                          
                         <div>
                         <MoveUpRight className="w-[18px] h-[18px] text-green-500"/>
                         </div>
                          
                         
                        </div>
                    </div>
                </div>
                <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                         Dividend yield In
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] text-red-500/80 ">
                          {stockinfo.data.low}
                          </p>
                         
                        </div>
                    </div>
                </div>
                <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                        Open
                       
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] ">
                          {stockinfo.data.open}
                          </p>
                         
                        </div>
                    </div>
                </div>
                 <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                        Symbol
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] ">
                          {stockinfo.data.symbol}
                          </p>
                         
                        </div>
                    </div>
                </div>
                 <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                        Year high
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] text-orange-400 ">
                          {stockinfo.data.year_high}
                          </p>
                         
                        </div>
                    </div>
                </div>
                 <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                        Year low
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] text-pink-400 ">
                          {stockinfo.data.year_low}
                          </p>
                         
                        </div>
                    </div>
                </div>
                 <div className = "flex items-center justify-evenly space-x-4 ">
                    <div className = "w-[150px] p-2"> 
                        <div className = "ml-[10px] ">
                        Volumn
                        </div>
                    </div>
                    <div className = "w-[150px] p-2 "> 
                        <div className = "ml-[10px]  ">
                          <p className="ml-[1px] font-medium ">
                          {stockinfo.data.volume}
                          </p>
                         
                        </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>

    
    </div>
  );
}

export default page;
