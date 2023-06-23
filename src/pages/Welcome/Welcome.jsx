import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"

import { Grid, Typography } from "@mui/material"

import Splash from "../../components/Splash/Splash"
import './Welcome.css'
import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';
import CreateProfile from '../../components/CreateProfile/CreateProfile';

function Welcome() {
  const location = useLocation();
  const path = location.pathname
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Grid container className="welcome-page">
          <Typography variant='h4'>
            <span className='welcome-msg'>Let&apos;s Get Started</span>
          </Typography>
          <Grid item 
            xs={12}
            sm={12}
            lg={3}
          > 
            {path === '/signup' && <SignUp /> }
            {path === '/' && <Login /> }
            {path === '/createProfile' && <CreateProfile /> }
          </Grid>
          <Grid item className='login-banner'>
            {path === '/' && 
            <>
              <Typography>
                <span className='account-msg'>Don&apos;t have an account?</span>
              </Typography>
              <Typography>
                <span className='sign-in-msg'><Link to='/signup'>Sign up</Link></span>
              </Typography>
            </>
            }

            {path === '/signup' && 
            <>
              <Typography>
                <span className='account-msg'>Have an account already?</span>
              </Typography>
              <Typography>
                <span className='sign-in-msg'><Link to='/'>Log in</Link></span>
              </Typography>
            </>
            }
          </Grid>
      </Grid>
      <Splash hidden={showSplash}/>
    </>

  )
}

export default Welcome