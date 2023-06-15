import { Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import bg_image from '../../assets/img/bg.jpg'

function WelcomePage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <Grid
      container
      className="welcome-page"
      sx={{
        position:'absolute',
        height:'100%',
        backgroundImage:`url(${bg_image})`,
        backgroundPosition:'45%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}>
        
        <Typography 
          sx={{
            position:'absolute',
            top:36,
            width:(isDesktop ? '300px' : '200px'),
            left: 60,
            fontWeight:'bold',
            fontSize:`calc(25px + 2vw)`,
          }}
        >
          Let&apos;s Get Started
        </Typography>
        <Grid
          item
          sx={{

          }}
        >
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
        <Grid
          item
          sx={{
            backgroundColor:'black',
            display:'flex',
            gap:'10px',
            position:'absolute',
            bottom:0,
            width:'100%',
            justifyContent:'center',
            py:2
          }}
        >
          <Typography 
            sx={{
              color:'white',
              fontSize:`min(calc(10px + 1vw), 30px)`,
            }}
          >
            Already have an account? 
          </Typography>
          <Typography 
            sx={{
              color:`${theme.palette.primary.main}`,
              fontSize:`min(calc(10px + 1vw), 30px)`,
            }}
          >
            <Link to='/signin'>Sign in</Link>
          </Typography>
        </Grid>
    </Grid>
  )
}

export default WelcomePage