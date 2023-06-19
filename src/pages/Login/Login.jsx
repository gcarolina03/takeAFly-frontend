import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Button, Card, CardContent, CardActions, Grid, TextField, Typography, Box, IconButton, CardHeader } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ArrowCircleLeft, Email, Visibility, VisibilityOff } from '@mui/icons-material'
import { useTheme } from "@mui/material/styles";


import { LoginAPI } from '../../services/auth.services'
import ErrorMsgComp from '../../components/ErrorMsg/ErrorMsg'
import './Login.css'

function Login() {
  const theme = useTheme();
  const navigate = useNavigate()
  // DATA
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[isPassVisible, setIsPassVisible] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setShowError] = useState(false)

  // ------ EMAIL
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  function emailVerification() {
    return email !== '';
  }

  // PASSWORD
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  function passwordVerification() {
    return password !== '';
  }

  const handleTogglePassword = () => {
    setIsPassVisible(!isPassVisible);
  };

  // ERROR 
   const showErrorMsg = () => {
    setShowError(true)
    setTimeout(() => { setShowError(false) }, 4000);
  }

  const hideErrorMsg = () => {
    setShowError(false)
  }

  // LOG IN SERVICE
  const logIn = async () => {
    const res = await LoginAPI(email, password)
    console.log(res)
    if (res === 'error' || !localStorage.getItem('token')) {
      setErrorMsg('Email or password incorrect')
      showErrorMsg()
    } else {
      navigate('/dashboard')
    }
  }

  // SUBMIT
  function submitForm(e) {
    e.preventDefault();
    if (
      emailVerification() &&
      passwordVerification()
    ) {
      logIn()
    } else {
      setErrorMsg('Warning! Some fields are incorrect or empty.')
      showErrorMsg()
    }
  }

  return (
    <Box className="box">
      <Grid
      item
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
        <IconButton  sx={{ position: "fixed", p:'0 !important', m:1 }} href="/">
          <ArrowCircleLeft className="btn-back"
          />
        </IconButton>
        <CardHeader 
        sx={{
          textAlign:'center',
          mt: {xs: '30%', sm:"20%"}, 
          mb: {xs: '20%', sm:"20%", lg:'10%'},
        }}
          title="Welcome"
          subheader='Please enter your data to continue'
        />
        {showError && (
          <ErrorMsgComp errorMsg={errorMsg} show={showError} hideErrorMsg={hideErrorMsg} />
        )}
        <CardContent>           
          <TextField 
            fullWidth 
            label='Email'
            variant='standard'
            onChange={handleEmail}
            InputProps={{
              endAdornment:(
                <IconButton disabled>
                  <Email />
                </IconButton>
              )
            }}
          />
          <TextField 
            fullWidth 
            label='Password'
            variant='standard'
            sx={{ mt: '20px', mb:2 }} 
            onChange={handlePassword}
            type={isPassVisible ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => handleTogglePassword()}>
                  { isPassVisible ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              ),
            }}
          />
          <Typography 
            color={grey[700]}
            sx={{ display:'flex', justifyContent:'end', textDecoration:'underline'}}
          >
            <Link to='/'>Forgot your Password?</Link>
          </Typography>
          
        </CardContent>
        <Box textAlign='center' sx={{position:'absolute', width:'100%',
        bottom:0}}>
          <Typography sx={{color:theme.palette.secondary.light}}>
            <span>Don&apos;t have an account? </span>
            <Link to= '/signup'>
              <span style={{color:theme.palette.primary.dark}}>Sign Up</span>
            </Link>
          </Typography>
          <CardActions sx={{width:'100%', mt:2, padding:'0 !important'}} >
            <Button
              onClick={(e) => {
                submitForm(e);
              }}
              variant="text"
              size="large"
              className='btn'
              sx={{ 
                borderRadius:0,
                backgroundColor:theme.palette.primary.main,
                color:theme.palette.primary.contrastText,
              }}
            >
              Sign in
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
    </Box>
  )
}

export default Login