import React from 'react'
import axios from "axios"
import Pre from '../../components/Pre';
async function page() {
  const response  = await axios.post("http://127.0.0.1:3001/getPreTrainedModels")
  console.log(response.data);
  return (
    <div>
     <Pre preTrainedModelNames = {response.data.preTrainedModelNames}  />
   

    </div>
  )
}

export default page