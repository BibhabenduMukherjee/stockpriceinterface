"use client"
import axios from 'axios'
import React from 'react'
 function handelClick(s:string){

    console.log("ok");
    const formData = new FormData();

    formData.append("modelName" , s)
   axios.post("http://127.0.0.1:3001/getPredictions" , formData).then((response) => console.log(response)
   ).catch((err) => console.log(err))

}
function TestCom() {
  return (
    <div>
           <form onSubmit= {(e)=>{
            e.preventDefault();
            handelClick("nifty50")}}>
          <input type="text"   />
          <button >click</button>
       </form>
    </div>
  )
}

export default TestCom