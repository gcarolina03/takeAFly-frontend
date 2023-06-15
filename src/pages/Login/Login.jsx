import { useLocation } from "react-router"
import { Grid } from "@mui/material"
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import SignUp from "../../components/Signup/signup";
import CreateProfile from "../../components/CreateProfile/CreateProfile";

function Login() {
  const location = useLocation();
  const pathname = location.pathname

  console.log(location)
  return (
    <Grid container>
      {(pathname === '/') && <WelcomePage />}
      {(pathname === '/signup') && <SignUp />}
      {(pathname === '/createProfile') && <CreateProfile />}

    </Grid>
  )
}

export default Login