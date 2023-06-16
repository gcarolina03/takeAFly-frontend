import { useLocation } from "react-router"
import { Grid } from "@mui/material"
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import SignUp from "../../components/SignUp/SignUp";
import CreateProfile from "../../components/CreateProfile/CreateProfile";

function Login() {
  const location = useLocation();
  const pathname = location.pathname

  console.log(location)
  return (
    <Grid container sx={{justifyContent:'center'}}>
      {(pathname === '/') && <WelcomePage />}
      {(pathname === '/signup') && <SignUp />}
      {(pathname === '/createProfile') && <CreateProfile />}

    </Grid>
  )
}

export default Login