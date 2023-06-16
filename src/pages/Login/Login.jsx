import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { LoginAPI } from '../../services/auth.services'

import { Button, Card, CardContent, CardActions, Typography, Box, IconButton} from '@mui/material'
import { grey } from '@mui/material/colors'
import { Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CustomTextField from '../../componets/CustomTextField/CustomTextField'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[isPassVisible, setIsPassVisible] = useState(false)
  const navigate = useNavigate()
  const[isEmailValid, setIsEmailValid] = useState(true)

  // ------ EMAIL
  const handleEmail = (value) => {
    setEmail(value)
  }

  function emailVerification() {
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    return !(reg.test(email));
  }

  // PASSWORD
  const handlePassword = (value) => {
    setPassword(value)
  } 


  const logIn = async () => {
    await LoginAPI(email, password)
    if (!localStorage.getItem('token')) alert('Error: Usario o contraseña invalidos')
    else navigate('/dashboard')
  }

  return (
    <Card sx={{
      height: '100vh',
      width: '100vw',
      margin: '0',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'space-between'
     }}>
      <CardContent >
      <IconButton edge = 'start' color='inherit' aria-label='ArrowBack' sx={{ marginLeft: '0' }}>
        <Link to ='/yo'>
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
          <CustomTextField fullWidth label="email" variant="standard" onChange={handleEmail}  icon={<Email />}/>
          <CustomTextField fullWidth label="Password" variant="standard" onChange={handlePassword} icon = {<Lock/>}/>
            <Typography variant="body"color={grey[700]} sx={{padding:'10px', marginLeft: '170px'}}>
        <span> <Link to= '/resetpassword'>Forgot your Password?</Link></span>
      </Typography>
        </Box>
      </CardContent>
      <CardActions className='singin' sx={{display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
      <Typography variant="body"color={grey[700]} sx={{padding:'15px'}}>
        <span>¿You don&apos;t have an account?  <Link to= '/singup'>Sign Up</Link></span>
      </Typography>
        <Button variant="contained" color="error"  sx={{ width: '100vw', marginLeft: 0, height:'95px' }} onClick={logIn}>Sign In</Button>
      </CardActions>


    </Card>
  )
}

export default Login