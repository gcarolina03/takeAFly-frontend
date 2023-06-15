import { Grid} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import logo_white from '../../assets/logo/white.png'

function Splash({hidden}) {
  const theme = useTheme();
  const isTablet = useMediaQuery('(min-width:600px)');
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const heighLogo = (isDesktop) ? '50%' : isTablet ? '40%' : '30%'

  return (
    <Grid 
      container
      className="splash-screen" 
      sx={{
        position:'sticky',
        zIndex:!hidden ? -1 : 10,
        height:'100vh',
        backgroundColor:theme.palette.primary.main, 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        opacity: !hidden ? 0 : 1,  // Hide the component initially with opacity
        transition: 'opacity 1.5s ease-in-out'
      }}
    >
      <Grid 
        item
        xs={8} 
        md={6}
        lg={4}
        sx={{
          height:heighLogo,
          backgroundImage:`url(${logo_white})`,
          backgroundPosition:'center',
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain'
        }}
      ></Grid>
    </Grid>
    
  )
}

export default Splash