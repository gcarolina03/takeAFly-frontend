import { useLocation } from "react-router"
import { Grid } from "@mui/material"
import LoginForm from  '../../componets/LoginForm/LoginForm'

function Login() {

  console.log(location)
  return (
    <Grid container
    spacing={1}
    justifyContent= 'center'>
    
      <LoginForm/>
    </Grid>
  )
}

export default Login