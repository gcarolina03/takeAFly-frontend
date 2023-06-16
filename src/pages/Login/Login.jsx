import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { LoginAPI } from '../../services/auth.services'

import { Button, Card, CardContent, CardActions, TextField, Typography, Box, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Close, Email, Visibility, VisibilityOff } from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  const handleError = () => {
    setShowError(!showError)
  }

  // LOG IN SERVICE
  const logIn = async () => {
    const res = await LoginAPI(email, password)
    console.log(res)
    if (!localStorage.getItem('token')) {
      setErrorMsg('Email or password incorrect')
      handleError()
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
      handleError()
    }
  }

  return (
    <Box  sx={{
    height: '100vh',
    width: '100vw',
    margin: '0',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center'
    }}>
      <Card 
        sx={{ 
          width: '90%', 
          maxWidth: '400px',
          maxHeight: '600px' 
        }}
      >
        <CardContent>
          <IconButton edge ='start' color='inherit' aria-label='ArrowBack' sx={{ marginLeft: '0' }}>
            <Link to ='/'>
            <ArrowBackIcon />
            </Link>
          </IconButton>
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ 
              display:'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              paddingTop: '98px'
            }} 
            color={'black'}
          >
            Welcome
          </Typography>
          <Typography 
            variant='subtitule1'
            component='div' 
            color={grey [700]} 
            sx={{display: 'flex',
            justifyContent: 'center',
            padding: '28px' }}
          >
            Please enter your data to continue
          </Typography>
          <Box sx={{height:'200px', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding:'8px'}}>
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
      </Card>
      
      <CardActions className='singin' sx={{display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
        <Typography variant="body"color={grey[700]} sx={{padding:'15px'}}>
          <span>¿You don&apos;t have an account?  <Link to= '/singup'>Sign Up</Link></span>
        </Typography>
        <Button variant="contained"  sx={{ width: '90%', maxWidth: '400px', marginLeft: 0, height:'95px' }} onClick={(e) => {
            submitForm(e);
          }}>
          Sign In
        </Button>
      </CardActions>
    </Box>
  )
}

export default Login