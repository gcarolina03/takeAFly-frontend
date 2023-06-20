import { Box, Avatar, Typography, Grid, IconButton, CardActions, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowCircleLeft } from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { GetDestinationAPI } from "../../services/destination.services";
import { UpdateTravelDestinationAPI } from "../../services/travel.services";
import Categories from "../../components/Categories/Categories";
import './DestinationProfile.css'

function DestinationProfile() {
  const theme = useTheme();
  const { id, travelId } = useParams()
  const [destination, setDestination] = useState('')
  const navigate = useNavigate()

  const getDestination = async () => {
    const res = await GetDestinationAPI(id)
    setDestination(res)
  }

  const UpdateDestination = async () => {
    await UpdateTravelDestinationAPI(travelId, id)
    
  }

  useEffect(() => {
    getDestination()
  }, [])

  // SUBMIT
  function submitForm(e) {
    e.preventDefault();
    UpdateDestination()
    navigate('/travelCreated')
  }
  
  return (
    <Box
      id="boxDestination"
      sx={{
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <IconButton  sx={{ p:'0 !important', m:1, alignSelf:'start' }} href={`/selectDestination/${travelId}`} >
        <ArrowCircleLeft className="btn-back"/>
      </IconButton>
      <Grid
        item
        xs={12}
        sm={8}
        lg={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center'
          }}
        >
          <Avatar
            src={destination.imgUrl}
            alt="Destination Avatar"
            sx={{
              width: { xs: 150, sm: 200 },
              height: { xs: 150, sm: 200 },
              my: 1,
            }}
          />
        </Grid>

        <Grid item sx={{ mb: 5 }}>
          <Typography variant="h4" align="center">
            {destination.city}
          </Typography>
          <Typography variant="body1" align="center">
            {destination.country}
          </Typography>
        </Grid>

        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item>
            <Typography variant="h6" align="left" sx={{ mb: 1 }}>
              Description
            </Typography>
            <Typography
              variant="body2"
              align="justify"
              sx={{ fontSize: { xs: "15px", sm: "20px" } }}
              padding='30px'
              justifyContent='center'
            >
              {destination.description}
            </Typography>
            
          </Grid>
          <Typography
            align="center"
            variant="h6"
            sx={{ mb: 1 }}
          >
            Categories
          </Typography>
          <Grid
            sx={{
              osition: "absolute",
              display: "flex",
              gap: 1.5,
              flexWrap: "wrap",
              alignItems: "flex-start",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Categories />
          </Grid>
        </Grid>
      </Grid>
      <CardActions sx={{width:'100%', mt:2, padding:'0 !important'}} >
        <Button
          onClick={(e) => {
            submitForm(e);
          }}
          variant="text"
          size="large"
          className="btn"
          sx={{ 
            borderRadius:0,
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.primary.contrastText
          }}
        >
          Select Destination
        </Button>  
      </CardActions>
    </Box>
  );
}

export default DestinationProfile;
