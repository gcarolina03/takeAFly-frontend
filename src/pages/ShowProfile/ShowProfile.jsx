import { Avatar, Typography, Grid, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import MiniList from '../../components/MiniList/MiniList';
import { GetMyTravelsAPI, GetProfileAPI } from '../../services/user.services';
import { useEffect, useState } from 'react';
import { Edit } from '@mui/icons-material';

function ShowProfile() {
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
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
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

        <Grid sx={{ mb: 5 }}>
          <Grid sx={{ display:'flex', flexDirection:'row', position:'relative'}}>
          <Typography variant="h4" align="center">
            {user.first_name}&nbsp;{user.last_name}
          </Typography>
          <IconButton
              sx={{ p: "0 !important", m: 0, position:'absolute', right:-30, top:'50%', transform:'translateY(-50%)' }}
              href='/profile/edit'
            >
              <Edit className="btn-back" sx={{color:`grey`, fontSize:'25px !important'}}/>
            </IconButton>
          </Grid>
          <Typography variant="h6" align="center">
            {user.username} 
          </Typography>
          <Typography variant="body1" align="center">
            {calculateAge(user.birth_date)} years.
          </Typography>
        </Grid>

        <Grid sx={{ gap: "30px", flexDirection: "column" }}>
          <Grid>
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
          <Grid alignSelf="center">
            <Typography variant="h6" align="center" color={grey[600]}>
              Your Travels
            </Typography>
            {travels.length > 0 && <MiniList data={travels} />}
          </Grid>
        </Grid>
      </Grid>
  </>
    
  );
}

export default ShowProfile