import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { CreateProfileAPI } from "../../services/auth.services";

import {
  Box,
  Grid,
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
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-around",
          height: "100%",
          width: "100%",
        }}
        raised={true}
      >
          <CardHeader
            sx={{ alignSelf:'center', mt: {sm:"10%",  xs: '20%'}, pb: { sm: "10px", xs: '40px' } }}
            title="Create Profile"
          />
          <CardContent>
        <IconButton sx={{display:'flex', justifyContent:'center', p:0, mt:{ lg:0, xs:2 }, mb:{ lg:0, xs:4}, mx:auto, width:{ lg: "100px", xs: '150px' }, height:{ lg: "100px", xs: '150px' }, borderRadius:'100%', border:'solid black 5px'}} href="/">
          <AddAPhoto 
            sx={{ 
            fontSize: { lg: "60px", xs: '100px' }, 
            color:'black',
            m:0,
            p:0
            }} 
          />
        </IconButton>
        <Grid sx={{display:'flex', flexDirection:'row', gap:2, mt:'20px'}}>
          <TextField
            fullWidth
            margin="dense"
            label="First Name"
            sx={{ width:'50%' }}
            variant="standard"
            onChange={handleFirstName}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Last Name"
            sx={{ width:'50%' }}
            variant="standard"
            onChange={handleLastName}
          />
        </Grid>
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
          sx={{ my: "20px" }}
          onChange={handleDescription}
        />
      </CardContent>
      
      <Box textAlign='center' sx={{position:{xs:'absolute', sm:'relative'} , width:'100%', 
        bottom:0}}>
          <CardActions className="box-btn" >
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
      </Box>
      
    </Card>
  );
}

export default CreateProfile;
