import { Button, Card, TextField } from "@mui/material";
import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP } from "./baseurl";

const Register=({setAddusermodel,setDataUpdate,dataUpdate,setMessage,message})=>{
    const fetching=useNavigate()
    const [adduser,setAdduser]=useState({
        username:"",
        password:"",
        DOB:"",
        place:"",
        qualification:""
    })
    const inputref=useRef({})

    const handleChange=(e)=>{
        setAdduser({...adduser,[e.target.name]:e.target.value})
    }

    const handleClick=()=>{
          fetching("/allemployee")
    }

    const handleSubmit=(event)=>{
      event.preventDefault();
      if (adduser.username === "" || adduser.username === undefined) {
        inputref.current.username.focus();
        console.log("djdj")
      } else if (adduser.password === "" || adduser.password === undefined) {
        inputref.current.password.focus();
      } else if (
        adduser.DOB === "" ||
        adduser.DOB === undefined
      ) {
        inputref.current.DOB.focus();
      } else if (
        adduser.place === "" ||
        adduser.place === undefined
      ) {
        inputref.current.place.focus();
      } else if (
        adduser.qualification === "" ||
        adduser.qualification === undefined
      ){
        inputref.current.qualification.focus();
      }
      else if(adduser.username!=="" && adduser.password!=="" && adduser.qualification!=="" && adduser.dob!=="" && adduser.place!==""){

      
     
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
              setTimeout(()=>{
                setMessage({success:"",error:""})
              
               },4000)
              setAddusermodel(false)
            }
          })
          .catch((error)=>setMessage(error))
        }
        
    }

  

    return(
        <>
       
        <center>
      <Card style={{width:"500px",height:"500px"}}>
      <h2>register</h2>
      <br/>
        <TextField type="text" name="username" onChange={handleChange} placeholder="username" variant="standard" inputRef={(ref) => (inputref.current.username = ref)} required/>
        <br/><br/><br/>
        <TextField type="password" name="password" onChange={handleChange} placeholder="enter your password" variant="standard" inputRef={(ref) => (inputref.current.password = ref)} required/>
        <br/><br/><br/>
        <TextField type="date" name="DOB" onChange={handleChange} placeholder="dob"  variant="standard" inputRef={(ref) => (inputref.current.DOB = ref)} required/>
        <br/><br/><br/>
        <TextField type="text"   name="place" onChange={handleChange} placeholder="place" variant="standard" inputRef={(ref) => (inputref.current.place = ref)} required/>
        <br/><br/><br/>
        <TextField type="text" name="qualification" onChange={handleChange}  placeholder="qualification" variant="standard" inputRef={(ref) => (inputref.current.qualification = ref)} required/>
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