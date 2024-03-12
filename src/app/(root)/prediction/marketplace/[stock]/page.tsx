import IntroSelectionMarket from "@/src/app/components/IntroSelectionMarket";
import axios from "axios";
import React from "react";
import ChartMarket from "@/src/app/components/ChartMarket";
import Donut from "../../../../components/testingcom/UserChartTest";
import {
  dateandvalues,
  getClose,
  getDates,
} from "../../../../../../lib/helper";
import ChartSmall from "@/src/app/components/ChartSmall";
import { TableData } from "@/src/app/components/TableData";
import Range from "@/src/app/components/Range";
import GraphMarketPlace from "@/src/app/components/GraphMarketPlace";
import UseFetchedDataCom from "@/src/app/components/UseFetchedDataCom";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import dynamic from "next/dynamic";
import ResizeableFileTracker from "@/src/app/components/ResizeableFileTracker";
var data = {
  results: {
    "2023-11-07": {
      Close: 181.5807800293,
      Dividends: 0,
      High: 182.199959396,
      Low: 178.734523784,
      Open: 178.9442389456,
      "Stock Splits": 0,
      Volume: 70530000,
    },
    "2023-11-08": {
      Close: 182.6493682861,
      Dividends: 0,
      High: 183.2086290476,
      Low: 181.3510756678,
      Open: 182.1100854772,
      "Stock Splits": 0,
      Volume: 49340300,
    },
    "2023-11-09": {
      Close: 182.1699981689,
      Dividends: 0,
      High: 183.8777397072,
      Low: 181.5707815219,
      Open: 182.7192775556,
      "Stock Splits": 0,
      Volume: 53763500,
    },
    "2023-11-10": {
      Close: 186.3999938965,
      Dividends: 0.24,
      High: 186.5700073242,
      Low: 183.5299987793,
      Open: 183.9700012207,
      "Stock Splits": 0,
      Volume: 66133400,
    },
    "2023-11-13": {
      Close: 184.8000030518,
      Dividends: 0,
      High: 186.0299987793,
      Low: 184.2100067139,
      Open: 185.8200073242,
      "Stock Splits": 0,
      Volume: 43627500,
    },
    "2023-11-14": {
      Close: 187.4400024414,
      Dividends: 0,
      High: 188.1100006104,
      Low: 186.3000030518,
      Open: 187.6999969482,
      "Stock Splits": 0,
      Volume: 60108400,
    },
    "2023-11-15": {
      Close: 188.0099945068,
      Dividends: 0,
      High: 189.5,
      Low: 187.7799987793,
      Open: 187.8500061035,
      "Stock Splits": 0,
      Volume: 53790500,
    },
    "2023-11-16": {
      Close: 189.7100067139,
      Dividends: 0,
      High: 190.9600067139,
      Low: 188.6499938965,
      Open: 189.5700073242,
      "Stock Splits": 0,
      Volume: 54412900,
    },
    "2023-11-17": {
      Close: 189.6900024414,
      Dividends: 0,
      High: 190.3800048828,
      Low: 188.5700073242,
      Open: 190.25,
      "Stock Splits": 0,
      Volume: 50922700,
    },
    "2023-11-20": {
      Close: 191.4499969482,
      Dividends: 0,
      High: 191.9100036621,
      Low: 189.8800048828,
      Open: 189.8899993896,
      "Stock Splits": 0,
      Volume: 46505100,
    },
    "2023-11-21": {
      Close: 190.6399993896,
      Dividends: 0,
      High: 191.5200042725,
      Low: 189.7400054932,
      Open: 191.4100036621,
      "Stock Splits": 0,
      Volume: 38134500,
    },
    "2023-11-22": {
      Close: 191.3099975586,
      Dividends: 0,
      High: 192.9299926758,
      Low: 190.8300018311,
      Open: 191.4900054932,
      "Stock Splits": 0,
      Volume: 39617700,
    },
    "2023-11-24": {
      Close: 189.9700012207,
      Dividends: 0,
      High: 190.8999938965,
      Low: 189.25,
      Open: 190.8699951172,
      "Stock Splits": 0,
      Volume: 24048300,
    },
    "2023-11-27": {
      Close: 189.7899932861,
      Dividends: 0,
      High: 190.6699981689,
      Low: 188.8999938965,
      Open: 189.9199981689,
      "Stock Splits": 0,
      Volume: 40552600,
    },
    "2023-11-28": {
      Close: 190.3999938965,
      Dividends: 0,
      High: 191.0800018311,
      Low: 189.3999938965,
      Open: 189.7799987793,
      "Stock Splits": 0,
      Volume: 38415400,
    },
    "2023-11-29": {
      Close: 189.3699951172,
      Dividends: 0,
      High: 192.0899963379,
      Low: 188.9700012207,
      Open: 190.8999938965,
      "Stock Splits": 0,
      Volume: 43014200,
    },
    "2023-11-30": {
      Close: 189.9499969482,
      Dividends: 0,
      High: 190.3200073242,
      Low: 188.1900024414,
      Open: 189.8399963379,
      "Stock Splits": 0,
      Volume: 48794400,
    },
    "2023-12-01": {
      Close: 191.2400054932,
      Dividends: 0,
      High: 191.5599975586,
      Low: 189.2299957275,
      Open: 190.3300018311,
      "Stock Splits": 0,
      Volume: 45679300,
    },
    "2023-12-04": {
      Close: 189.4299926758,
      Dividends: 0,
      High: 190.0500030518,
      Low: 187.4499969482,
      Open: 189.9799957275,
      "Stock Splits": 0,
      Volume: 43389500,
    },
    "2023-12-05": {
      Close: 193.4199981689,
      Dividends: 0,
      High: 194.3999938965,
      Low: 190.1799926758,
      Open: 190.2100067139,
      "Stock Splits": 0,
      Volume: 66628400,
    },
    "2023-12-06": {
      Close: 192.3200073242,
      Dividends: 0,
      High: 194.7599945068,
      Low: 192.1100006104,
      Open: 194.4499969482,
      "Stock Splits": 0,
      Volume: 41089700,
    },
    "2023-12-07": {
      Close: 194.2700042725,
      Dividends: 0,
      High: 195,
      Low: 193.5899963379,
      Open: 193.6300048828,
      "Stock Splits": 0,
      Volume: 47477700,
    },
    "2023-12-08": {
      Close: 195.7100067139,
      Dividends: 0,
      High: 195.9900054932,
      Low: 193.6699981689,
      Open: 194.1999969482,
      "Stock Splits": 0,
      Volume: 53377300,
    },
    "2023-12-11": {
      Close: 193.1799926758,
      Dividends: 0,
      High: 193.4900054932,
      Low: 191.4199981689,
      Open: 193.1100006104,
      "Stock Splits": 0,
      Volume: 60943700,
    },
    "2023-12-12": {
      Close: 194.7100067139,
      Dividends: 0,
      High: 194.7200012207,
      Low: 191.7200012207,
      Open: 193.0800018311,
      "Stock Splits": 0,
      Volume: 52696900,
    },
    "2023-12-13": {
      Close: 197.9600067139,
      Dividends: 0,
      High: 198,
      Low: 194.8500061035,
      Open: 195.0899963379,
      "Stock Splits": 0,
      Volume: 70404200,
    },
    "2023-12-14": {
      Close: 198.1100006104,
      Dividends: 0,
      High: 199.6199951172,
      Low: 196.1600036621,
      Open: 198.0200042725,
      "Stock Splits": 0,
      Volume: 66831600,
    },
    "2023-12-15": {
      Close: 197.5700073242,
      Dividends: 0,
      High: 198.3999938965,
      Low: 197,
      Open: 197.5299987793,
      "Stock Splits": 0,
      Volume: 128256700,
    },
    "2023-12-18": {
      Close: 195.8899993896,
      Dividends: 0,
      High: 196.6300048828,
      Low: 194.3899993896,
      Open: 196.0899963379,
      "Stock Splits": 0,
      Volume: 55751900,
    },
    "2023-12-19": {
      Close: 196.9400024414,
      Dividends: 0,
      High: 196.9499969482,
      Low: 195.8899993896,
      Open: 196.1600036621,
      "Stock Splits": 0,
      Volume: 40714100,
    },
    "2023-12-20": {
      Close: 194.8300018311,
      Dividends: 0,
      High: 197.6799926758,
      Low: 194.8300018311,
      Open: 196.8999938965,
      "Stock Splits": 0,
      Volume: 52242800,
    },
    "2023-12-21": {
      Close: 194.6799926758,
      Dividends: 0,
      High: 197.0800018311,
      Low: 193.5,
      Open: 196.1000061035,
      "Stock Splits": 0,
      Volume: 46482500,
    },
    "2023-12-22": {
      Close: 193.6000061035,
      Dividends: 0,
      High: 195.4100036621,
      Low: 192.9700012207,
      Open: 195.1799926758,
      "Stock Splits": 0,
      Volume: 37122800,
    },
  },
};
interface PageProps {
  params: {
    stock: string;
  };
}

const ApexChartClientRendering = dynamic(
  () => import("@/src/app/components/testingcom/UserChartTest"),
  {
    ssr: false,
  }
);

const UserFetched = dynamic(
  () => import("@/src/app/components/UseFetchedDataCom"),
  {
    ssr: false,
  }
);

async function page({ params }: PageProps) {
  const mode = process.env.DEVELOPMENT_MODE ? "dev" : "prod";
  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL
  const { getUser } = getKindeServerSession();
  const user = getUser();
  console.log(user.given_name, user.id);

  const code = params.stock.split("-")[1];

  const s = decodeURIComponent(params.stock).split(" ")[0];
  // const {data} = await axios.post("http://127.0.0.1:3000/api/getMarket", {code : code});
  // const {data : data_interval} = await axios.post("http://127.0.0.1:3000/api/getMarketInterval", {code : code});
  //console.log(data.results);

  const [date, value] = dateandvalues(data.results);
  //console.log("Stock data", date.slice(0, 10));
  //console.log ( "Date interval data" , data_interval.results.slice(0,10));

  const cls = value.map((item) => item.Close);

  // const cls_interval = data_interval.results.map((item:any) => item.Close);
  //  const d_interval = data_interval.results.map((item:any) => item.Date);

  return (
    <div className="flex space-y-5 flex-col h-screen">
      <IntroSelectionMarket s={s} />
      <div className="max-w-4xl  h-[500px]">
        {date && value && (
          <ChartMarket
            name={s}
            XplaneVals={date.slice(1, 50)}
            YPlaneValsClose={cls.slice(1, 50)}
            borderColor="red"
          />
        )}
      </div>

      <div className="flex flex-wrap  space-y-2 md:space-y-0 justify-evenly  p-4  max-w-6xl w-full mx-auto">
        {/* <div className = "flex">

         <div className= "grid  grid-cols-1 md:grid-cols-2">
             
         <div className="w-[300px]">
              <MonthSelection/>
              </div>
              <div className = "w-[100px] h-[20px] bg-green-400" >
                hello
              </div>
            
             </div>
             


         </div> */}

        <div className="w-[530px] items-center  flex flex-col space-y-7  h-[490px] p-2 bg-green-200">
          {/* this part is used to show the interval data */}
          <ChartSmall
            name={s}
            XplaneVals={date}
            YPlaneValsClose={cls}
            borderColor="black"
          />
          <ChartSmall
            name={s}
            XplaneVals={date.slice(1, 29)}
            YPlaneValsClose={cls.slice(1, 29)}
            borderColor="blue"
          />
        </div>
        <div className="w-[400px] mt-2  bg-blue-200">
          <TableData data={value.slice(5, 12)} />
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center ">
        Simple To Get The Data
      </h2>
      <section className=" w-[400px]    pb-7  mx-auto flex flex-col space-y-2 ">
        <div className="h-[400px]   mx-auto  bg-green-300  w-full rounded-md  mb-7 ">
          <Range code={code} />
        </div>
      </section>

      <div className=" h-[190px]">
        <GraphMarketPlace mode={mode} />
      </div>

      <div className="  ">
        <UserFetched
          mode={mode}
          stockName={s}
          userId={user.id!}
          userName={user.given_name}
        />
      </div>

      <div className=" mx-auto  relative top-[310px]">
        <ResizeableFileTracker  useremail = {user.email!} userId = {user.id!} backendurl = {backendurl!} />
      </div>

      {/* <div className="mx-auto relative top-[360px]">
        <ApexChartClientRendering />
      </div> */}

      {/* <div className="bg-blue-500 mt-[20px]">User</div> */}

      <div className = "relative top-[330px]">
        <footer className="bg-gradient-to-r from-violet-200 to-pink-200 font-sans">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-900">Subscribe our newsletter to get an update.</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-900">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className=" transition-colors duration-300 text-black hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                    <p className="text-black transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                    <p className="text-black transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                </div>
            </div>

           
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div>
            
            <div className="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" className="" width="30" height="30" alt="db" />
            </div>
        </div>
        <p className="font-sans p-8  text-black text-start md:text-center md:text-lg md:p-4">© 2023 You Company Inc. All rights reserved.</p>
    </div>
</footer>
      </div>
    </div>
  );
}

export default page;
