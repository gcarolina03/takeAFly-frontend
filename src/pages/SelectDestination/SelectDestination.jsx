import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useEffect, useState  } from 'react';
import { GetAllDestinationsAPI } from '../../services/destination.services';
import CardList from '../../components/CardList/CardList';
import { useParams } from 'react-router-dom';


function SelectDestination() {
  const { travel } = useParams()
  const [destinations, setDestinations] = useState('')

  const GetAllDestinations = async () => {
    const res = await GetAllDestinationsAPI()
    setDestinations(res)
  }

  useEffect(() => {
    GetAllDestinations()
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
        {/* <IconButton  sx={{ position: "fixed", p:'0 !important', m:1 }} href="/dashboard">
          <ArrowCircleLeft className="btn-back"
          />
        </IconButton> */}
        
        <CardHeader
          sx={{ textAlign:'center', marginTop: "10px", paddingBottom: "10px" }}
          title="Destination"
        />
        <CardContent sx={{height:'100%', border:'solid red'}}>
          {destinations.length > 0 && <CardList data={destinations} travel={travel} type='destination'/> } 
        </CardContent>
      </Card>
    </Grid>
  );
}

export default SelectDestination