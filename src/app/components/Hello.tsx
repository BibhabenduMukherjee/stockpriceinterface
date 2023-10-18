"use client"
import axios from 'axios'
import ChartJS from "../components/ChartJS"
import React, { useEffect, useState } from 'react'
import { log } from 'console';

 
 function Hello() {
    //const [data , setData] = useState()
   // console.log(Object.values(data))
   const [file, setFile] = useState(null);
   const [graphData,setGraphData] = useState<CsvUploadType>()
   const handleSubmit = (e:any) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file.');
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append('file', file) // 'csvFile' is the field name on the server
     axios.post("http://127.0.0.1:3001/upload",formData).then(response => {
        
    // console.log(response);
     setGraphData(response.data)
     debugger
     console.log(graphData);
     
     }).catch(err => {console.log(err);});
   
    // You can now send the formData to your server using fetch or another method
    // Example: sendFormDataToServer(formData);
  };
    // const newData = Object.entries(data).map(([date,values])=>({
    //     date,
    //     ...values as Record<string,any>
    // }))
//    const dateValues = newData.map((items:any)=>{
//      return items.date
    
//    });
//    const closeValues = newData.map((items:any)=>{
//     return items.Close
   
//   });

  function handleChange(e:any){
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    
    setFile(selectedFile)
   
  
  }
   
  // console.log("datevalues",dateValues);
   

  return (
    <div>
       {
       graphData  && <ChartJS  dateValues={graphData.dfDateVals} closeValue= {graphData.dfCloseVals}/>
       }   
       {graphData && graphData.status}
        <input accept=".csv"  type = "file" onChange={handleChange}/>
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Hello