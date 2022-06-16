import { useState } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { dpost } from "../Servic/Api";



const validationSchema = yup.object({
  name: yup
  .string()
  .required("Name is Required!"),

  residence: yup
     .string()
     .required("Address is Required!"),

   password: yup
   .number()
    // // .matches(
    // //   /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
    //    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
    .required("Password is Required!"),

     
 


});
const Loginform = () => {
  
  const [Logindetails,setLogindetails]=useState({

    name: "",
    residence:"",
   password: ""
  
  
  })
  
  
  const handleChange =(e)=>{
  
  setLogindetails({...Logindetails,[e.target.name]:[e.target.value]})
  
  }
  
  const{ name,residence,password}=Logindetails;
  
  const addDetails =async(e)=>{
  
  e.preventDefault();
  
   await dpost(Logindetails);
  
  }


return (
    <div style={{width:"80%",position:"relative",marginLeft:"135px"}}>


 <img src="backform.jpg" alt=""  style={{width:"100%",height:"550px"}}  /> 


<div style={{marginTop:"5px", textAlign:"center", fontFamily:"Arial",width:"300px",height:"400px",position:"absolute",bottom:"50px",marginLeft:"100px"}} >



      <Formik validationSchema={validationSchema}
        initialValues={{
          name: "",
          residence:"",
         password: ""
         
            
        }}


      >
        {({ values }) => (

          <Form  style={{Color:"black"}} onChange={(e)=>handleChange(e)}>
            
            <label style={{color:"black"}} >NAME</label>
            <Field style={{width:"300px",height:"50px",borderRadius:"10px",border:"5px solid blue"}} 
            name="name" type="text"  />
            
                        <br />
           
           <label style={{color:"black"}} >RESIDENCE</label>
            <Field style={{width:"300px",height:"50px",borderRadius:"10px",border:"5px solid blue"}} 
            name="residence" type="text"  />
            
                    <br />
       
      
  
            <label style={{color:"black"}}>PASSWORD:</label>
            <Field style={{width:"300px",height:"50px",borderRadius:"10px",border:"5px solid blue"}} name="password" type="password" />
        <br /> 
        <br>
        </br>
        <br>
        </br>
            <Button type="submit" style={{width:"150px",color:"white",backgroundColor:"black",borderColor:"blue",borderRadius:"10px",position:"relative",left:"10px",bottom:"14px"}} 
            onClick={(e)=> addDetails(e)}   >SignUp</Button>
          
          
          
          
          
          
          
          
          </Form>
        )}
      </Formik>

      </div>

    </div>
  );
};

export default Loginform;