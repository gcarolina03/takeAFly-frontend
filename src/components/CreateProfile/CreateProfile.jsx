import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { CreateProfileAPI } from "../../services/auth.services";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { auto } from "@popperjs/core";

function CreateProfile() {
  const theme = useTheme();
  const navigate = useNavigate()
  // DATA
  const [firstName, setfirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [description, setDescription] = useState(null);

  // FIRTSNAME
  function handleFirstName(e) {
    setfirstName(e.target.value);
  }

  // LASTNAME
  function handleLastName(e) {
    setLastName(e.target.value);
  }

  // ADDRESS
   function handleAddress(e) {
    setAddress(e.target.value);
  }

  // DESCRIPTION
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  

  const CreateProfileService = async () => {
    const res = await CreateProfileAPI(firstName, lastName, address, description)
    if (res !== 'error') navigate('/dashboard')
  }

  // SUBMIT
  function submitForm(e) {
    e.preventDefault();
    CreateProfileService()
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-around",
        height: "100vh",
        maxWidth: "400px",
      }}
      raised={true}
    >
      <CardHeader
        sx={{ textAlign:'center', marginTop: "20%", pb: "10px" }}
        title="Create Profile"
      />
      <CardContent>
        <IconButton sx={{display:'flex', justifyContent:'center', p:0, mt:2, mb:4, mx:auto, width:'150px', height:'150px', borderRadius:'100%', border:'solid black 5px'}} href="/">
          <AddAPhoto 
            sx={{ 
            fontSize: '100px', 
            color:'black',
            m:0,
            p:0
            }} 
          />
        </IconButton>
        <TextField
          fullWidth
          margin="dense"
          label="First Name"
          variant="standard"
          onChange={handleFirstName}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Last Name"
          variant="standard"
          sx={{ marginTop: "20px" }}
          onChange={handleLastName}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Address"
          variant="standard"
          sx={{ marginTop: "20px" }}
          onChange={handleAddress}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Description"
          variant="standard"
          sx={{ marginTop: "20px" }}
          onChange={handleDescription}
        />
      </CardContent>

      <CardActions
        sx={{
          width: "100%",
          position: "fixed",
          bottom:0,
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          p:0,
          color:theme.palette.primary.contrastText,
        }}
      >
        <Button
          onClick={(e) => {
            submitForm(e);
          }}
          size="large"
          sx={{ 
            height: "7vh",
            width: "50%",
            borderRadius:0,
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.primary.contrastText,
          }}
          variant="text"
        >
          Create Profile
        </Button>
        <Button
          href="/dashboard"
          size="large"
          sx={{ 
            height: "7vh",
            width: "50%",
            borderRadius:0,
            backgroundColor:theme.palette.secondary.main,
            color:theme.palette.primary.contrastText,
          }}
          variant="text"
        >
          Skip
        </Button>
      </CardActions>
    </Card>
  );
}

export default CreateProfile;
