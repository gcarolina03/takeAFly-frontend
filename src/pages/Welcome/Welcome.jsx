import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import { Button, Grid, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import Splash from "../../components/Splash/Splash"
import './Welcome.css'

function Welcome() {
  const theme = useTheme();
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
          <Grid item >
            <Button 
              href="/signup"
              variant="text"
              sx={{
                backgroundColor:`${theme.palette.primary.main}`,
                color:`${theme.palette.primary.contrastText}`,
                px:6, py:2, gap:2,
                fontSize:`calc(10px + 0.5vw), 25px)`,
              }}
            >
              <PersonAddIcon/>Create Account
            </Button>
          </Grid>
          <Grid item className='login-banner'>
            <Typography>
              <span className='account-msg'>Already have an account?</span>
            </Typography>
            <Typography>
              <span className='sign-in-msg'><Link to='/login'>Sign in</Link></span>
            </Typography>
          </Grid>
      </Grid>
      <Splash hidden={showSplash}/>
    </>

  )
}

export default Welcome