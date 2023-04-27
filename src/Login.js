import { Button, Card, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP } from "./baseurl";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [responseData, setResponseData] = useState({});
  const navigate = useNavigate();
  const [error,setError]=useState()
  const [status,setStatus]=useState()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post(`${HTTP}/login`,data,{
        headers: {
            "Content-type": "application/json",
            credentials: "include",
          },
    })
    .then((response)=>{
        if(response.status===200){
            localStorage.setItem("userdata", JSON.stringify(response.data));
            navigate("/allemployee");
        }
        else if(response.status===400){
            setError(response.data)
        }
    })
    .catch((error)=>setError(error.response.data))
  };
  return (
    <>
      <center>
        <Card style={{ width: "400px", height: "400px", marginTop: "100px" }}>
            <p style={{color:"red"}}>{error}</p>
          <h2>Login!</h2>
          <br />
          <TextField
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
           
          />
          <br />
          <br />
          <TextField
            name="password"
            type="password"
            placeholder="enter your password"
            onChange={handleChange}
            
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            login
          </Button>
        </Card>
      </center>
    </>
  );
}
