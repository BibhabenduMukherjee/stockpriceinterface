import Gdata from "@/src/app/components/Gdata";
import axios from "axios";

interface ChatIdPageProps {
    params: {
      modelname: string;
    }
  }
async function page({
    params
  }: ChatIdPageProps) {
    
    console.log(params.modelname);
    const response = await axios.get(`http://127.0.0.1:3001/modelname?a=${params.modelname}`);
    console.log(response.data);
    
    
    return (
      <div className = "flex flex-col">

         {/* graphs for incoming data */}
          <h2 className = "text-center font-semibold text-2xl md:text-3xl mt-4 mb-6"> {params.modelname.toLowerCase()} dataset graph</h2>
         <Gdata data = {response.data}/>

      </div>
    )
  }
  
  export default page