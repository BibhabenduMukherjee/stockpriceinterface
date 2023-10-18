"use client"
import axios from 'axios'
import React from 'react'
interface pageProps {
    preTrainedModelNames : string[]
}
function Pre({preTrainedModelNames} : pageProps) {
     

    function handleClick(){
        const formdata = new FormData();
        formdata.append("modelName" , preTrainedModelNames[0])
       axios.post("http://127.0.0.1:7676/getPredictions" , formdata).then((response) => {
        debugger;
        console.log(response.data);
        
       }).catch(err => {console.log(err);
       });

    }
  return (
    <div>{preTrainedModelNames[0]}
      <button onClick = {handleClick} >click to get prediction</button>
    </div>
  )
}

export default Pre