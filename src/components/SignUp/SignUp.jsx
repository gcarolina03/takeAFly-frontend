import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SignUpAPI } from "../../services/auth.services";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import {
  CalendarMonth,
  Done,
  Email,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import ErrorMsgComp from "../ErrorMsg/ErrorMsg";
import "./SignUp.css";

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
      showErrorMsg()
    } else if (!localStorage.getItem('token')) {
      setErrorMsg('Warning! Some fields are incorrect or empty.')
      showErrorMsg()
    } else {
      navigate('/createProfile')
    }
  }

  // ERROR 
  const showErrorMsg = () => {
    setShowError(true)
    setTimeout(() => { setShowError(false) }, 4000);
  }

  const hideErrorMsg = () => {
    setShowError(false)
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
      showErrorMsg()
    }
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
          sx={{ 
            textAlign:'center',
            mt: 1, 
            mb: {xs: '20%', sm:"20%", lg:'0'}, 
            pb:0
          }}
          title="Sign Up"
        />
        {showError && (
          <ErrorMsgComp errorMsg={errorMsg} show={showError} hideErrorMsg={hideErrorMsg} />
        )}

        <CardContent>
          <TextField
            fullWidth
            margin="dense"
            label="Username"
            variant="standard"
            required
            onChange={handleUsername}
            sx={{ mt:0 }}
            error={usernameVerification() && username !== ""}
            InputProps={{
              endAdornment: (
                <IconButton disabled>
                  {usernameVerification() ? <Person /> : <Done />}
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Password"
            variant="standard"
            sx={{ mt: {xs: "20px", sm:'10px', lg:'5px'} }}
            type={isPassVisible ? "text" : "password"}
            onChange={handlePassword}
            error={passwordVerification() && password !== ""}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => handleClickPass()}>
                  {passwordVerification() ? (
                    isPassVisible ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )
                  ) : (
                    <Done />
                  )}
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Repeat Password"
            variant="standard"
            sx={{ mt: {xs: "20px", sm:'10px', lg:'5px'} }}
            type={isPassRepVisible ? "text" : "password"}
            onChange={handleRepeatPassword}
            error={repeatPasswordVerification() && repeatPassword !== ""}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => handleClickPassRep()}>
                  {repeatPasswordVerification() || password === "" ? (
                    isPassRepVisible ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )
                  ) : (
                    <Done />
                  )}
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            variant="standard"
            type="email"
            sx={{ mt: {xs: "20px", sm:'10px', lg:'5px'} }}
            onChange={handleEmail}
            error={emailVerification() && email !== ""}
            helperText={emailVerification() && email !== "" ? 'Introduce a valid email' : ''}
            InputProps={{
              endAdornment: (
                <IconButton disabled>
                  {emailVerification() ? <Email /> : <Done />}
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            margin="dense"
            variant="standard"
            label="Date"
            type="date"
            sx={{ mt: {xs: "20px", sm:'10px', lg:'5px'} }}
            onChange={handleBirth}
            helperText={!validateAge() && birth !== "" ? 'Introduce a valid date' : ''}
            error={!validateAge() && birth !== ""}
            InputProps={{
              endAdornment: (
                <IconButton disabled>
                  {!validateAge() ? <CalendarMonth /> : <Done />}
                </IconButton>
              ),
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </CardContent>
        
        <Box textAlign='center' sx={{position:{xs:'absolute', sm:'relative'}, width:'100%',
      bottom:0}}>
          <CardActions sx={{width:'100%', mt:2, padding:'0 !important'}} >
            <Button
              onClick={(e) => {
                submitForm(e);
              }}
              variant="text"
              size="large"
              className="btn"
              sx={{ 
                borderRadius:0,
                backgroundColor:theme.palette.primary.main,
                color:theme.palette.primary.contrastText,
              }}
            >
              Sign up
            </Button>
          </CardActions>
        </Box>
      </Card>
  );
}

export default SignUp;
