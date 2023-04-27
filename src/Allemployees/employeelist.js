import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Card, Modal } from "@mui/material";
import EditEmployees from "./editemployees";
import Register from "../register";
import { useNavigate } from "react-router-dom";
import { HTTP } from "../baseurl";

const Employeelist = () => {
  const navigate=useNavigate()
  const [message,setMessage]=useState({success:"",error:""})
  const [employeeData, setEmployeeData] = useState([]);
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(false);
  const [addusermodal, setAddusermodel] = useState(false);
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  console.log(userdata);

  const singleUserdata = (data) => {
    //   console.log(id)
    //  fetch(`http://localhost:4000/singleuser/${id}`,{
    //   method:"GET",
    //   headers:{
    //       "Content-type":"application/json"
    //   }
    //  })
    //  .then((response)=>response.json())
    //  .then((res)=>console.log(res))
    //  .catch((error)=>console.log(error))
    setDetails(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAddusermodel(false);
    setDataUpdate(true);
  };

  const handledelete = (data) => {
    fetch(`${HTTP}/userdelete/${data._id}`, {
      method: "DELETE",
    })
    .then((response)=>{
      setMessage({success:'deleted successfully',error:""})
      setDataUpdate(!dataUpdate);
    })
    setTimeout(()=>{
      setMessage({success:"",error:""})
    },[3000])
   
  };

  const handleAddusermodal = () => {
    setAddusermodel(true);
    setMessage({success:"",error:""})
  };

  const Logout=()=>{
    navigate("/")
  }

  useEffect(() => {
    fetch(`${HTTP}/users`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => setEmployeeData(res))
      .catch((error) => console.log(error));
  }, [dataUpdate]);
  return (
    <>
     <h5 style={{color:"green"}}>{message?.success}</h5>
        <h5 style={{color:"red"}}>{message?.error}</h5>
      <Modal
        open={addusermodal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop
      >
        <center>
          <Box style={{ width: "500px", height: "500px", marginTop: "250px" }}>
            <Card>
              <Button
                variant="contained"
                color="success"
                style={{ marginLeft: "400px" }}
                onClick={handleClose}
              >
                X
              </Button>
              <Register
                setAddusermodel={setAddusermodel}
                setDataUpdate={setDataUpdate}
                dataUpdate={dataUpdate}
                setMessage={setMessage}
                message={message}
              />
            </Card>
          </Box>
        </center>
      </Modal>
      <br />
      <h3>{userdata.isadmin == true && "Admin page"}</h3>
      <div style={{display:"flex"}}>
      {userdata.isadmin == true && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddusermodal}
          style={{height:"40px"}}
        >
          Add user
        </Button>
      )}
      &nbsp; &nbsp; &nbsp;
      <br/> <br/>
      <Button variant="contained" color="success" onClick={Logout} style={{height:"40px"}}>Logout</Button>
      <br /> <br /> <br />
      </div>
      <TableContainer>
        <Table aria-label="simple table" border={2}>
          <TableHead style={{ background:"black" }}>
            <TableRow>
              <TableCell style={{ color:"white" }}>username</TableCell>
              <TableCell style={{ color:"white" }}>DOB</TableCell>
              <TableCell style={{ color:"white" }}>qualification</TableCell>
              <TableCell style={{ color:"white" }}>place</TableCell>
              {userdata.isadmin == true && (
                <>
                  <TableCell allign="right" style={{ color:"white" }}>Admin Action</TableCell>
                 
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData?.map((row) => (
              <TableRow>
                <TableCell>{row?.username}</TableCell>
                <TableCell>{row?.DOB}</TableCell>
                <TableCell>{row?.qualification}</TableCell>
                <TableCell>{row?.place}</TableCell>
                {userdata?.isadmin == true && (
                  <>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => singleUserdata(row)}
                      >
                        edit
                      </Button>
                    &nbsp;&nbsp;
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handledelete(row)}
                      >
                        delete
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop
      >
        <center>
          <Box style={{ width: "500px", height: "500px", marginTop: "250px" }}>
            <Card>
              <Button
                variant="contained"
                color="success"
                style={{ marginLeft: "400px" }}
                onClick={handleClose}
              >
                X
              </Button>
              <EditEmployees
                details={details}
                setDetails={setDetails}
                setOpen={setOpen}
                setDataUpdate={setDataUpdate}
                open={open}
                dataUpdate={dataUpdate}
                setMessage={setMessage}
                message={message}
              
              />
            </Card>
          </Box>
        </center>
      </Modal>
    </>
  );
};

export default Employeelist;
