import { Box, Avatar, Typography, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'
import MiniList from '../../components/MiniList/MiniList';
import { GetMyTravelsAPI, GetProfileAPI } from '../../services/user.services';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

function UserProfile() {
  const [user, setUser] = useState("");
  const [travels, setTravels] = useState('')

  const getUser = async () => {
    const res = await GetProfileAPI()
    setUser(res)
  }

  const getTravels = async () => {
    const res = await GetMyTravelsAPI()
    setTravels(res)
  }

  useEffect(() => {
    getUser()
    getTravels()
  }, [])

  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
  <>
    <Header />
    <Box
      sx={{
        display: 'flex',
        backgroundColor: grey[100],
        height: "100%",
        width: "100%",
        alignItems: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        lg={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: 'center',
          padding: "40px",
          height: "100%",
          margin: 'auto'
        }}
      >
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="User Avatar"
            sx={{
              width: { xs: 150, sm: 200 },
              height: { xs: 150, sm: 200 },
              my: 2,
            }}
          />
        </Grid>
        <Grid item sx={{ mb: 5 }}>
          <Typography variant="h4" align="center">
            {user.username}
          </Typography>
          <Typography variant="body1" align="center">
            {calculateAge(user.birth_date)} years.
          </Typography>
        </Grid>
        <Grid container sx={{ gap: "30px", flexDirection: "column" }}>
          <Grid item>
            <Typography variant="h6" align="left" sx={{ mb: 1 }}>
              Description
            </Typography>
            <Typography
              variant="body2"
              align="justify"
              sx={{ fontSize: { xs: "15px", sm: "20px" } }}
            >
              {user.description !== null
                ? user.description
                : "no description :("}
            </Typography>
          </Grid>
          <Grid item alignSelf="center">
            <Typography variant="h6" align="center" color={grey[600]}>
              Your Travels
            </Typography>
            {travels.length > 0 && <MiniList data={travels} />}
          </Grid>
          {/* <Grid item sx={{mt:2}} alignSelf='center' >
            <Typography variant="h6" align="center" color={grey[600]}>
              Wishlist
            </Typography>
            <MiniList />
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
  </>
    
  );
}

export default UserProfile