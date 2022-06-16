import axios from 'axios';

const url="http://localhost:5000";

export const dpost =async(Logindetails)=>{


 return await axios.post(`${url}/patientcare/create`,Logindetails);

} 




export const getApplicant =async()=>{


    return await   axios.get(`${url}/patientcare/view`);
    
    } 
    



    
      export const ddel = async (id)=>{
        console.log("api ===> delete",id)
      
         return await axios.delete(`${url}/patientcare/delete/${id}`);
      }


      
