import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  Grid,
  Box,
} from "@mui/material";
import {
  ArrowCircleLeft,
  CalendarMonth,
  Close,
  Done,
  Email,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

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
    <Box className="box">
      <Grid
        xs={12}
        sm={12}
        lg={5}
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: { lg: "60px" },
          height: "100%",
        }}
      >
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
          <IconButton sx={{ position: "fixed" }} href="/">
            <ArrowCircleLeft
              sx={{
                marginTop: "20px",
                fontSize: "50px",
                color: "lightgray",
              }}
            />
          </IconButton>
          <CardHeader
            sx={{ marginLeft: "40%", marginTop: "20%", paddingBottom: "40px" }}
            title="Sign Up"
          />
          {showError && (
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                border: "red solid 1px",
                mx: 2,
                borderRadius: 2,
              }}
            >
              <Typography
                fontSize="15px"
                fontWeight="bold"
                color="red"
                textAlign="center"
              >
                Error! algunos campos no son correctos
              </Typography>
              <IconButton
                onClick={() => {
                  handleError();
                }}
              >
                <Close
                  sx={{
                    color: "red",
                  }}
                />
              </IconButton>
            </CardContent>
          )}

          <CardContent>
            <TextField
              fullWidth
              margin="dense"
              label="Username"
              variant="standard"
              required
              onChange={handleUsername}
              error={usernameVerification() && username !== ""}
              InputProps={{
                endAdornment: (
                  <IconButton>
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
              required
              sx={{ marginTop: "20px" }}
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
              required
              sx={{ marginTop: "20px" }}
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
              required
              sx={{ marginTop: "20px" }}
              onChange={handleEmail}
              error={emailVerification() && email !== ""}
              InputProps={{
                endAdornment: (
                  <IconButton>
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
              required
              sx={{ marginTop: "20px" }}
              onChange={handleBirth}
              error={!validateAge() && birth !== ""}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    {!validateAge() ? <CalendarMonth /> : <Done />}
                  </IconButton>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </CardContent>

          <CardActions
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              display: "flex",
              justifyItems: "center",
              justifyContent: "center",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Button
              href="/createprofile"
              onClick={(e) => {
                submitForm(e);
              }}
              size="large"
              sx={{ color: "whitesmoke" }}
              variant="text"
            >
              Sign up
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}

export default SignUp;
