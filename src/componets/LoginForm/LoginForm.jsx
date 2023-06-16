import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Card, CardContent, CardActions, Typography, Box, IconButton} from '@mui/material'
import { grey } from '@mui/material/colors'
import { Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material'
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomTextField from '../CustomTextField/CustomTextField'
import './LoginForm.css'



function LoginForm() {
   const theme = useTheme();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[isPassVisible, setIsPassVisible] = useState(false)
  const navigate = useNavigate()
  const[isEmailValid, setIsEmailValid] = useState(true)

  const handleEmail = (value) => {
    setEmail(value)
  }

  const handlePassword = (value) => {
    setPassword(value)
  } 

  const validateEmailFormat = (email) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const logIn = async () => {
    await login(email, password)
    if (!localStorage.getItem('token')) alert('Error: Usario o contraseña invalidos')
    else navigate('/dashboard')
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
    <Card sx={{ width: '90%', maxWidth: '400px',maxHeight: '600px' }} >
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
    </Card>
      <CardActions className='singin' sx={{display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
      <Typography variant="body"color={grey[700]} sx={{padding:'15px'}}>
        <span>¿You don&apos;t have an account?  <Link to= '/singup'>Sign Up</Link></span>
      </Typography>
        <Button variant="contained"  sx={{ width: '90%', maxWidth: '400px', marginLeft: 0, height:'95px' }} onClick={logIn}>Sign In</Button>
      </CardActions>
    </Box>
  )
}

export default LoginForm