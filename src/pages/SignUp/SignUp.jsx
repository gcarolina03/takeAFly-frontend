import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { SignUpAPI } from "../../services/auth.services";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { ArrowCircleLeft, CalendarMonth, Close, Done, Email, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';

function SignUp() {
  const theme = useTheme();
  const navigate = useNavigate()
  // DATA
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isPassVisible, setIPassVisible] = useState(false);
  const [isPassRepVisible, setIPasRepVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState('');
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setShowError] = useState(false)


  // USERNAME
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  
  function usernameVerification() {
    return (username.length < 5)
  }

  // PASSWORD
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function passwordVerification() {
    return !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password))
  }

  function handleClickPass() {
    setIPassVisible(!isPassVisible);
  }

  // REPEAT PASSWORD
   function handleRepeatPassword(e) {
    setRepeatPassword(e.target.value);
  }

  function repeatPasswordVerification() {
    return repeatPassword !== password;
  }

  function handleClickPassRep() {
    setIPasRepVisible(!isPassRepVisible);
  }

  // ------ EMAIL
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function emailVerification() {
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    return !(reg.test(email));
  }

  // BIRTH
  function handleBirth(e) {
    setBirth(e.target.value);
  }
  
  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  function validateAge() {
    return calculateAge(birth) > 18;
  }

  // SIGN UP SERVICE
  const SignUpService = async () => {
    const res = await SignUpAPI(username, email, password, birth)
    if (res === 'error') {
      setErrorMsg('Error! Email already exists')
      handleError()
    } else if (!localStorage.getItem('token')) {
      setErrorMsg('Warning! Some fields are incorrect or empty.')
      handleError()
    } else {
      navigate('/createProfile')
    }
  }

  // ERROR 
  const handleError = () => {
    setShowError(!showError)
  }

  // SUBMIT
  function submitForm(e) {
    e.preventDefault();
    if (
      !usernameVerification() &&
      !passwordVerification() &&
      !emailVerification() &&
      !repeatPasswordVerification() &&
      validateAge()
    ) {
      SignUpService()
    } else {
      setErrorMsg('Warning! Some fields are incorrect or empty.')
      handleError()
    }
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-around",
        height: "100vh",
        width: "400px",
      }}
      raised={true}
    >
      <IconButton sx={{position:'fixed'}} href="/">
        <ArrowCircleLeft 
          sx={{ 
          marginTop:'20px',
          fontSize: '50px', 
          color:'lightgray',
          }} 
        />
      </IconButton>
      <CardHeader
        sx={{ marginLeft: "35%", marginTop: "35%", paddingBottom: "50px" }}
        title="Sign Up"
      />
      {showError && 
      <CardContent sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', border:'red solid 1px', mx:2, borderRadius:2}}>
        <Typography fontSize='15px' fontWeight='bold' color='red' textAlign='center'>{errorMsg}</Typography>
        <IconButton onClick={() => {handleError()}}>
          <Close 
            sx={{ 
            color:'red'
            }} 
          />
        </IconButton>
      </CardContent>}
      
      <CardContent>
        <TextField
          fullWidth
          margin="dense"
          label="Username"
          variant="standard"
          onChange={handleUsername}
          error={ usernameVerification() && username !== ''}
          InputProps={{
            endAdornment: <IconButton>{ usernameVerification() ? <Person /> : <Done /> }</IconButton>
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Password"
          variant="standard"
          sx={{ marginTop: "20px" }}
          type={isPassVisible ? "text" : "password"}
          onChange={handlePassword}
          error={ passwordVerification() && password !== ''}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleClickPass()}>
                { passwordVerification() ? (isPassVisible ? <Visibility /> : <VisibilityOff />)  : <Done /> }
              </IconButton>
            ),
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Repeat Password"
          variant="standard"
          sx={{ marginTop: "20px" }}
          type={isPassRepVisible ? "text" : "password"}
          onChange={handleRepeatPassword}
          error={repeatPasswordVerification() && repeatPassword !== ''}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleClickPassRep()}>
                { repeatPasswordVerification() || password === '' ? (isPassRepVisible ? <Visibility /> : <VisibilityOff />) : <Done />}
              </IconButton>
            ),
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Email"
          variant="standard"
          type='email'
          sx={{ marginTop: "20px" }}
          onChange={handleEmail}
          error={emailVerification() && email !== ''}
          InputProps={{
            endAdornment: <IconButton>{ emailVerification() ? <Email /> : <Done /> }</IconButton>
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          variant="standard"
          label='Date'
          type="date"
          sx={{ marginTop: "20px" }}
          onChange={handleBirth}
          error={!validateAge() && birth !== ''}
          InputProps={{
            endAdornment: <IconButton>{ !validateAge() ? <CalendarMonth /> : <Done /> }</IconButton>
          }}
          InputLabelProps={{
            shrink: true,
          }}
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
          backgroundColor:theme.palette.primary.main,
          color:theme.palette.primary.contrastText,
        }}
      >
        <Button
          href="/createprofile"
          onClick={(e) => {
            submitForm(e);
          }}
          size="large"
          sx={{ height: "7vh", color: "whitesmoke" }}
          variant="text"
        >
          Sign up
        </Button>
      </CardActions>
    </Card>
  );
}

export default SignUp;
