import { Box, Avatar, Typography, Grid, IconButton, CardActions, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import './DestinationProfile.css'
import Categories from "../../components/Categories/Categories";
import { useEffect, useState } from "react";
import { GetDestinationAPI } from "../../services/destination.services";
import { UpdateTravelDestinationAPI } from "../../services/travel.services";
import { useParams } from "react-router-dom";
import { ArrowCircleLeft } from "@mui/icons-material";

function DestinationProfile() {
  const theme = useTheme();
  const { id, travelId } = useParams()
  const [destination, setDestination] = useState('')

  const getDestination = async () => {
    const res = await GetDestinationAPI(id)
    setDestination(res)
  }

  const UpdateDestination = async () => {
    const res = await UpdateTravelDestinationAPI(travelId, id)
    console.log(res)
    return res
  }

  useEffect(() => {
    getDestination()
  }, [])

  // SUBMIT
  function submitForm(e) {
    e.preventDefault();
    UpdateDestination()
  }
  

  return (
    <Box
      className="box1"
      sx={{
        justifyContent: "center",
        height: "100%",
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
          flexDirection: "column",
          padding: "40px",
          height: "100%",
        }}
      >
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src={destination.imgUrl}
            alt="Destination Avatar"
            sx={{
              width: { xs: 150, sm: 200 },
              height: { xs: 150, sm: 200 },
              my: 2,
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
            color:theme.palette.primary.contrastText,
          }}
        >
          Select Destination
        </Button>
      </CardActions>
    </Box>
  );
}

export default DestinationProfile;
