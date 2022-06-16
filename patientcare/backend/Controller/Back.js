import UserBack1 from "../Model/Back.js";

export const dcreate= async(req,res)=>{

  try {
  
    
const User=await UserBack1.find();
res.json(User);
console.log("resolved")
  } 
  
  catch (error) {
      console.log('not get');
  }      

};

export const dcreate1= async(req,res)=>{

const name=req.body.name;
 const nameInStringFormat=name.toString();

 const residence=req.body.residence;
 const residenceInStringFormat=residence.toString();


const password=req.body.password;
const passwordInString=password.toString();




const newuser= new UserBack1({

    name: nameInStringFormat,
    residence: residenceInStringFormat,
    password: passwordInString,
    
    
});


try {
    
await newuser.save();
res.json(newuser);




} 
catch (err) {
    
    console.log('not saved....');
}


};





export const dcreate3= async (req,res)=>{
  console.log(req.params.id)
  const del=await UserBack1.findByIdAndDelete(req.params.id);
  try{
      if(del)
      {
          console.log("deleted");
          res.status(200).send("user deleted Successfully");
      }
  }
  catch(err){
      res.status(500).send(err.msg);
  }

}