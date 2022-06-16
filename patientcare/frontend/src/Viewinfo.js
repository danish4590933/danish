import { useState } from "react";
import { dpost, getApplicant,ddel } from "./Servic/Api";

import { useEffect } from "react";
const Viewinfo = () => {



    const [patientDetails, setPatientDetails] = useState([]);
    const [openDialog, setOpenDialog] = useState(true);
    const [state, setState] = useState(null);

    function handleChange(e) {
        setState({ ...state, [e.target.name]: [e.target.value] })
    }




  const [info, Setinfo] = useState([]);
  useEffect(() => {

    getinfo();


  }, []);

  const getinfo = async () => {
    const result = await getApplicant();
    Setinfo(result.data);


  }
// function selectUser(id)
// {
// console.warn("function called",users[id-1])
// let item=users[id-1]
// setName(details.name)
// setresidence(details.residence)
// setpassword(details.password)
// }
// function updateUser()
// {

//   console.warn(name,residence,password)
// }
  const deleteData = (id) => {
    // if (window.confirm("Patient will DELETED by pressing OK")) {
    //     console.log("Request to delete"); }
    ddel(id);

  }

  
    

  return (
<div>
    <table class="table table-dark">
      <thead>
        <tr>

          <th scope="col">Name</th>
          <th scope="col">residence</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        {



          info.map(details => (

            <tr>

              <td>  {details.name} </td>


              <td>  {details.residence} </td>

              <td>  {details.password} </td>


              <td> <button className="btn btn-danger" style={{ marginRight: "80px" }} onClick={(e) => deleteData(details._id)}>Delete</button>
                <br></br> </td>
                {/* <td> <button className="btn btn-danger" style={{ marginRight: "80px" }} onClick={(e) => selectUser(details._id)}>Update</button>
                <br></br> </td> */}

</tr>

      ))


    }
    
    </tbody>
    </table >
    {/* <div>

<input type="text" value ={name} onChange={(e)=>setName(e.target.value)}/> <br></br>
<input type="text" value ={residence} onChange={(e)=>setresidence(e.target.value)}/> <br></br>
<input type="password" value ={password} onChange={(e)=>setpassword(e.target.value)} /> <br></br>


    </div> */}
    </div>
    

);
  }

export default Viewinfo;