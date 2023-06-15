import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./signup.css";

function SignUp() {
  const [isPassVisible, setIPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [birth, setBirth] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function emailVerification() {
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    return reg.test(email);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function passwordVerification() {
    return password.length > 5 && password.search(/[A-Z]/) > 0;
  }

  function repeatPasswordVerification() {
    return repeatPassword == password;
  }

  function handleRepeatPassword(e) {
    setRepeatPassword(e.target.value);
  }

  function handleBirth(e) {
    setBirth(e.target.value);
  }

  function handleClick() {
    setIPassVisible(!isPassVisible);
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
    return calculateAge(birth) >= 18;
  }

  function submitForm(e) {
    e.preventDefault();
    if (
      passwordVerification() &&
      emailVerification() &&
      repeatPasswordVerification()
    ) {
      if (validateAge()) {
        alert("Signup complete");
      } else {
        alert("You are under age");
      }
    } else {
      alert("Invalid email or password");
    }
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
        sx={{ marginLeft: "35%", marginTop: "35%", paddingBottom: "50px" }}
        title="Signup"
      />
      <IconButton style={{position: 'fixed'}} href="/">
        <ArrowBackOutlinedIcon style={{ fontSize: '35px', paddingLeft: '20px', paddingTop: '50px'}} />
      </IconButton>
      <CardContent>
        <TextField
          fullWidth
          margin="dense"
          label="Username"
          variant="standard"
        ></TextField>
        <TextField
          fullWidth
          type={isPassVisible ? "text" : "password"}
          className={passwordVerification() ? "valid" : "invalid"}
          onChange={(e) => {
            handlePassword(e);
          }}
          margin="dense"
          label="Password"
          variant="standard"
          sx={{ marginTop: "10%" }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleClick()}>
                {isPassVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        ></TextField>
        <TextField
          fullWidth
          type={isPassVisible ? "text" : "password"}
          className={repeatPasswordVerification() ? "valid" : "invalid"}
          onChange={(e) => {
            handleRepeatPassword(e);
          }}
          margin="dense"
          label="Password"
          variant="standard"
          sx={{ marginTop: "10%" }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleClick()}>
                {isPassVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        ></TextField>
        <TextField
          className={emailVerification() ? "valid" : "invalid"}
          onChange={(e) => {
            handleEmail(e);
          }}
          fullWidth
          margin="dense"
          label="Email"
          variant="standard"
          sx={{ marginTop: "10%" }}
          InputProps={{
            endAdornment: <Email />,
          }}
        ></TextField>
        <Stack component="form" noValidate spacing={3}>
          <TextField
            onChange={(e) => {
              handleBirth(e);
            }}
            id="date"
            type="date"
            defaultValue=""
            variant="standard"
            sx={{ marginTop: "10%" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
      </CardContent>

      <CardActions
        style={{
          width: "100%",
          position: "fixed",
          bottom: "0px",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a936F",
          textTransform: "none",
          color: "white",
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
          Signup
        </Button>
      </CardActions>
    </Card>
  );
}

export default SignUp;
