import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Button,
  IconButton,
  Grid
} from "@mui/material";
import { ArrowCircleLeft, CalendarMonth, Done, Email, Person, Visibility, VisibilityOff } from "@mui/icons-material";

import ErrorMsgComp from "../../components/ErrorMsg/ErrorMsg";
import "./EditProfile.css";
import { useEffect, useState } from "react";
import { GetProfileAPI, UpdateProfileAPI } from "../../services/user.services";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

function EditProfile() {
  const theme = useTheme();
  const navigate = useNavigate()

  // DATA
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setfirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [description, setDescription] = useState(null);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isPassVisible, setIPassVisible] = useState(false);
  const [isPassRepVisible, setIPasRepVisible] = useState(false);
  const [birth, setBirth] = useState('');
  // ERROR DATA
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setShowError] = useState(false)

  const getUser = async () => {
    const res = await GetProfileAPI()
    setUser(res)
  }

  const updateData = () => {
    if (user) {
      setEmail(user.email);
      setUsername(user.username);
      setfirstName(user.first_name)
      setLastName(user.last_name)
      setAddress(user.address)
      setDescription(user.description)
      setBirth(user.birth_date);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };

    fetchData();
  }, [])

  useEffect(() => {
    updateData()
  }, [user])

  // USERNAME
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  
  function usernameVerification() {
    return (username.length < 5)
  }

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

  // ERROR 
  const showErrorMsg = () => {
    setShowError(true)
    setTimeout(() => { setShowError(false) }, 4000);
  }

  const hideErrorMsg = () => {
    setShowError(false)
  }

  //HANDLE DATA TO SEND
  const dataToSend = () => {
    let data = {}
    if(username !== user.username && username !== '' && !usernameVerification()) data.username = username
    if(firstName !== user.first_name && firstName !== '') data.first_name = firstName
    if(lastName !== user.last_name && lastName !== '') data.last_name = lastName
    if(address !== user.address && address !== '') data.address = address
    if(description !== user.description && description !== '') data.description = description
    if(birth !== user.birth_date && birth !== '' && validateAge()) data.birth_date = birth
    if(repeatPasswordVerification()) data.password = password

    console.log(data)
    return data
  }

  const data = dataToSend()
  
  console.log(data)
  // SIGN UP SERVICE
  const UpdateProfileService = async () => {
    const data = dataToSend()
    await UpdateProfileAPI(data)
    navigate('/profile')
  }

  // SUBMIT
  function submitForm(e) {
    e.preventDefault();
    console.log()
    UpdateProfileService()
  }
  
  return (
    <Box className="edit-profile-container">
        <Grid
        item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Card
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "space-around",
              width: "100%",
            }}
          >
            <IconButton  sx={{ p:'0 !important', left:0, position:'absolute', m:1 }} href="/profile">
              <ArrowCircleLeft className="btn-back"
              />
            </IconButton>
            <CardHeader
              sx={{ textAlign:'center', pt:'50px' }}
              title="Edit Profile"
            />
            {showError && (
              <ErrorMsgComp errorMsg={errorMsg} show={showError} hideErrorMsg={hideErrorMsg} />
            )}
              <CardContent>
            {user && 
              <>
                <TextField
                  fullWidth
                  margin="dense"
                  label="Email"
                  variant="filled"
                  value={email}
                  disabled
                  type="email"
                  InputProps={{
                    endAdornment: (
                      <IconButton disabled>
                        <Email />
                      </IconButton>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  margin="dense"
                  label="Username"
                  variant='filled'
                  value={username}
                  required
                  sx={{ mt: {xs: "20px", sm:'10px', lg:'5px'} }}
                  onChange={handleUsername}
                  error={usernameVerification() && username !== ""}
                  InputProps={{
                    endAdornment: (
                      <IconButton disabled>
                        {usernameVerification() ? <Person /> : <Done />}
                      </IconButton>
                    ),
                  }}
                />
                <Grid sx={{display:'flex', flexDirection:'row', mt: {xs: "10px", lg:'5px'}, mb:0, gap:2}}>
                  <TextField
                    fullWidth
                    margin="dense"
                    value={firstName}
                    label="First Name"
                    sx={{ width:'40%' }}
                    variant="filled"
                    onChange={handleFirstName}
                  />
                  <TextField
                    fullWidth
                    margin="dense"
                    value={lastName}
                    label="Last Name"
                    sx={{ width:'60%' }}
                    variant="filled"
                    onChange={handleLastName}
                  />
                </Grid>
                <Grid sx={{display:'flex', flexDirection:'row', mt: {xs: "10px", lg:'5px'}, mb:0, gap:2}}>
                  <TextField
                    fullWidth
                    margin="dense"
                    value={address}
                    label="Address"
                    variant="filled"
                    onChange={handleAddress}
                  />
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="filled"
                    label="Date"
                    type="date"
                    value={birth}
                    onChange={handleBirth}
                    helperText={!validateAge() && birth !== "" ? 'Introduce a valid date' : ''}
                    error={!validateAge() && birth !== ""}
                    required
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
                </Grid>
                
                <TextField
                  fullWidth
                  margin="dense"
                  value={description}
                  label="Description"
                  variant="filled"
                  sx={{ mt: {xs: "20px", sm:'10px', lg:'5px'} }}
                  onChange={handleDescription}
                />
                <TextField
                  fullWidth
                  margin="dense"
                  label="Password"
                  variant="filled"
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
                  variant="filled"
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
                
                
              </>
              }
              </CardContent>
            
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
                  Save
                </Button>
              </CardActions>
          </Card>
        </Grid>
      </Box>
  )
}

export default EditProfile