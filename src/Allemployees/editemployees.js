import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { HTTP } from "../baseurl";

export default function EditEmployees({ details, setDetails,setOpen,open,setDataUpdate,dataUpdate,message,setMessage }) {
 

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleEdit=()=>{
    console.log("edit--")
    fetch(`${HTTP}/useredit/${details?._id}`,{
        method:"PUT",
        body: JSON.stringify(details),
        headers: {
            "Content-type": "application/json",
          },
    })
    .then((response)=>{
      if(response.status===201){
        setMessage({success:"updated successfully"})
        setOpen(!open)
        setDataUpdate(!dataUpdate)
      }
      setTimeout(()=>{
        setMessage({success:"",error:""})
      },[3000])
     
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
      <br/>
      <br/>
      
    </>
  );
}
