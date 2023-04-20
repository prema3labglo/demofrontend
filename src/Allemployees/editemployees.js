import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function EditEmployees({ details, setDetails,setOpen,open,setDataUpdate,dataUpdate }) {
  const [message,setMessage]=useState({success:""})

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };


  const handleEdit=()=>{
    console.log("edit--")
    fetch(`http://localhost:4000/useredit/${details?._id}`,{
        method:"PUT",
        body: JSON.stringify(details),
        headers: {
            "Content-type": "application/json",
          },
    })
    .then((response)=>{
      if(response.status===201){
        setMessage({success:"updated successfully"})
        setTimeout(()=>{
          setOpen(!open)
        },[3000])
        setDataUpdate(!dataUpdate)
      }
     
    })
   
  }


  return (
    <>
      <TextField
        type="text"
        name="username"
        value={details?.username}
        onChange={handleChange}
      />
      <br />
      <br />
      <br />
      <TextField
        type="text"
        name="qualification"
        value={details?.qualification}
        onChange={handleChange}
      />
      <br />
      <br />
      <br />
      <TextField
        type="date"
        name="DOB"
        value={details?.DOB}
        onChange={handleChange}
      />
      <br />
      <br />
      <br />
      <TextField
        type="text"
        name="place"
        value={details?.place}
        onChange={handleChange}
      />
      <br/>
      <br/>
      <Button variant="contained" onClick={handleEdit}>update</Button>
      <p style={{color:"green"}}>{message?.success}</p>
      <br/>
      <br/>
      
    </>
  );
}
