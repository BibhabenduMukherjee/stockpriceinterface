
import React from "react";

import axios from "axios"
import Hello from "../../components/Hello";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
const options = {
  method: 'GET',
  url: 'https://stock-prices2.p.rapidapi.com/api/v1/resources/stock-prices/3mo',
  params: {ticker: 'V'},
  headers: {
    'X-RapidAPI-Key': '2bf4e62736msh0d90c09f37c2988p17a312jsnf9677a4b3378',
    'X-RapidAPI-Host': 'stock-prices2.p.rapidapi.com'
  }
};
async function page() {
    // let response;
    // try{
    //      response = await axios.request(options);
    //     console.log(response.data);
        
    //   }catch(err){console.log(err.message);}
  
    
    const {getUser} = getKindeServerSession();
    const user = getUser();

    if(!user || !user.id) redirect('/login')
  



  return (
    <div>
    {user.email}
      <Hello />
    </div>
  )
}

export default page