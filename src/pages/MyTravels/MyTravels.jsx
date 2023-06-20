import { Card, CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';

import { useEffect, useState  } from 'react';

import CardList from '../../components/CardList/CardList';
import { GetMyTravelsAPI } from '../../services/user.services';


function MyTravels() {
  const [travels, setTravels] = useState('')
  const previousPathname = sessionStorage.getItem('previousPathname');
  const back = (previousPathname === '/profile') ? '/profile' : '/dashboard'


 
  const GetTravels = async () => {
    const res = await GetMyTravelsAPI()
    setTravels(res)
  }

  useEffect(() => {
    GetTravels()
  }, [])

  return (
    <Grid
      xs={12}
      sm={12}
      lg={5}
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: { lg: "60px" },
        height: "100%",
      }}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-around",
          height: "100%",
          width: "100%",
        }}
        raised={true}
      >
        <IconButton  sx={{ position: "fixed", p:'0 !important', m:1 }} href={`${back}`} >
          <ArrowCircleLeft className="btn-back"/>
        </IconButton>
        
        <CardHeader
          sx={{ textAlign:'center', marginTop: "10px", paddingBottom: "10px" }}
          title="Destination"
        />
        <CardContent sx={{height:'100%', border:'solid red'}}>
          {travels.length > 0 && <CardList data={travels} type='travel'/> } 
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MyTravels