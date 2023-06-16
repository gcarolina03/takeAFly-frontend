import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Card, CardContent, CardActions, Typography, Box, IconButton, Grid} from '@mui/material'
import { grey } from '@mui/material/colors'
import { Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material'
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomTextField from '../CustomTextField/CustomTextField'
import './LoginForm.css'
import bg_image from '../../assets/img/bg.jpg'


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
    <Grid xs={12} sm={12} lg={5}
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
        <span> Forgot your </span> <Link to= '/resetpassword'><span style={{textDecoration:'underline'}}>Password? </span></Link>
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

export default LoginForm