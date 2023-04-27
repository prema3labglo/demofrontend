import { Button, Card, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP } from "./baseurl";

const Register=({setAddusermodel,setDataUpdate,dataUpdate,setMessage,message})=>{
  console.log("register",message)
    const fetching=useNavigate()
    const [adduser,setAdduser]=useState({
        username:"",
        password:"",
        DOB:"",
        place:"",
        qualification:""
    })

    const handleChange=(e)=>{
        setAdduser({...adduser,[e.target.name]:e.target.value})
    }

    const handleClick=()=>{
          fetching("/allemployee")
    }

    const handleSubmit=()=>{
     
        fetch(`${HTTP}/register`, {
            method: "POST",
            body: JSON.stringify(adduser),
            headers: {
              "Content-type": "application/json",
            },
          })
          .then((response)=>{
            if(response.status===200){
              setMessage({success:"added successfully",error:""})
              setDataUpdate(!dataUpdate)
              setAddusermodel(false)
              setTimeout(()=>{
                setMessage({success:"",error:""})
              
               },4000)

            }
            else if(response.status===400){
              setMessage({success:"", error:"can't create user"})
              setAddusermodel(false)
            }
          })
          .catch((error)=>setMessage(error))
        
    }

  

    return(
        <>
       
        <center>
      <Card style={{width:"500px",height:"500px"}}>
      <h2>register</h2>
      <br/>
        <TextField type="text" name="username" onChange={handleChange} placeholder="username" variant="standard"/>
        <br/><br/><br/>
        <TextField type="password" name="password" onChange={handleChange} placeholder="enter your password" variant="standard"/>
        <br/><br/><br/>
        <TextField type="date" name="DOB" onChange={handleChange} placeholder="dob"  variant="standard"/>
        <br/><br/><br/>
        <TextField type="text"   name="place" onChange={handleChange} placeholder="place" variant="standard"/>
        <br/><br/><br/>
        <TextField type="text" name="qualification" onChange={handleChange} variant="standard"/>
        <br/><br/><br/>
        <Button type="submit" variant="contained" onClick={handleSubmit}>submit</Button>
       &nbsp; &nbsp;
        <Button onClick={handleClick} variant="contained">All employee</Button>
       
        </Card>
        </center>
        </>
    )
}

export default Register