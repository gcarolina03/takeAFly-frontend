import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Button, Card, CardContent, CardActions, Grid, TextField, Typography, Box, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Close, Email, Visibility, VisibilityOff } from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { LoginAPI } from '../../services/auth.services'
import bg_image from '../../assets/img/bg.jpg'
import './Login.css'

function Login() {
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
  const handleError = (val) => {
    setShowError(val)
  }

  // LOG IN SERVICE
  const logIn = async () => {
    const res = await LoginAPI(email, password)
    console.log(res)
    if (res === 'error' || !localStorage.getItem('token')) {
      setErrorMsg('Email or password incorrect')
      handleError(true)
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
      handleError(true)
    }
  }

  return (
    <Grid xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${bg_image})`,
        backgroundPosition: "45%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        alignItems: "center",
        width: '100%',
        padding: {lg: '100px'}
      }}>
    <Card sx={{ width: '90%', maxWidth: '400px', maxHeight: '1000px', backgroundColor: 'white' }} >
      <CardContent >
      <IconButton edge = 'start' color='inherit' aria-label='ArrowBack' sx={{ marginLeft: '0' }}>
        <Link to ='/'>
        <ArrowBackIcon />
        </Link>
      </IconButton>
        <Typography variant="h4" component="div" sx={{ display:'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '98px'}} color={'black'}>
          Welcome
        </Typography>
        <Typography variant='subtitule1' component='div' color={grey [700]} sx={{display: 'flex', justifyContent: 'center', padding: '28px' }}>
          Please enter your data to continue
        </Typography>
        <Box sx={{height:'200px', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding:'8px'}}>
          {showError && 
          <CardContent sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', border:'red solid 1px', mx:2, borderRadius:2}}>
            <Typography fontSize='15px' fontWeight='bold' color='red' textAlign='center'>{errorMsg}</Typography>
            <IconButton onClick={() => {handleError(false)}}>
              <Close 
                sx={{ 
                color:'red'
                }} 
              />
            </IconButton>
          </CardContent>}
          <TextField 
            fullWidth 
            label='email'
            variant='standard'
            sx={{ backgroundColor: 'white', margin: '10px 0' }} 
            onChange={handleEmail}
            InputProps={
              { endAdornment: <Email /> }
            }
          />
          <TextField 
            fullWidth 
            label='Password'
            variant='standard'
            sx={{ backgroundColor: 'white', margin: '10px 0' }} 
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
          <Typography variant="body"color={grey[700]} sx={{padding:'10px', marginLeft: '170px'}}>
            <span> <Link to= '/resetpassword'>Forgot your Password?</Link></span>
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{display: 'flex', flexDirection: 'column', justifyContent:'center',margin:'0' }}>
      <Typography variant="body"color={grey[700]} sx={{padding:'15px' }}>
        <span>¿You don&apos;t have an account?</span>
        <Link to= '/singup'>
          <span style={{textDecoration:'underline'}}>SingUp</span>
        </Link>
      </Typography>
        <Button variant="contained"  sx={{ width: '100%', maxWidth: '400px', marginLeft: 0, height:'95px',  }} onClick={logIn}>Sign In</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default Login