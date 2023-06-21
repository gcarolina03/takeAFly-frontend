import { Box, Avatar, Typography, Grid } from '@mui/material'
import { ArrowCircleLeft } from '@mui/icons-material';
import { grey } from '@mui/material/colors'
import MiniList from '../../components/MiniList/MiniList';
import { Link } from 'react-router-dom';

function UserProfile() {
  return (
    <Box
      sx={{
        justifyContent:"center",
        backgroundColor:grey[100],
        height:'100%'
      }}
    > 
      <Link to='dashboard'>
        <ArrowCircleLeft
            sx={{
              fontSize: "50px",
              top:10,
              left:10,
              color: "lightgray",
              position: "absolute"
            }}
          />
      </Link>
      <Grid item
        xs={12}
        sm={8}
        lg={4}
        sx={{
          flexDirection:'column',
          padding:'40px',
          height:'100%'
        }}
      > 
        <Grid item sx={{display:'flex', justifyContent:'center'}}>
          <Avatar 
            src="https://www.w3schools.com/w3images/avatar2.png" 
            alt="User Avatar" 
            sx={{ 
              width: {xs:150, sm:200}, 
              height: {xs:150, sm:200},
              my:2
            }}
          />
        </Grid>
        <Grid item sx={{mb:5}}>
          <Typography variant="h4" align="center">
            John Doe
          </Typography>
          <Typography variant="body1" align="center">
            Country, City
          </Typography>
        </Grid>
        <Grid container sx={{gap:'30px', flexDirection:'column'}}>
          <Grid item>
            <Typography variant="h6" align="left" sx={{mb:1}}>
              Description
            </Typography>
            <Typography variant="body2" align='justify' sx={{fontSize:{xs:'15px', sm: '20px'}}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper odio eget mi iaculis dignissim.
              Aliquam sollicitudin varius metus, id pulvinar tellus facilisis sed. Duis vitae odio ullamcorper, convallis
            </Typography>
          </Grid>
          <Grid item alignSelf='center'>
            <Typography variant="h6" align="center" color={grey[600]}>
              Your Travels
            </Typography>
            <MiniList />
          </Grid>
          <Grid item sx={{mt:2}} alignSelf='center' >
            <Typography variant="h6" align="center" color={grey[600]}>
              Wishlist
            </Typography>
            <MiniList />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserProfile