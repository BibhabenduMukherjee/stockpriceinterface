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
      <div>{params.modelname}</div>
    )
  }
  
  export default page