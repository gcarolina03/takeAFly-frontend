import { Box, Avatar, Typography, Grid, IconButton, CardActions, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowCircleLeft } from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { GetDestinationAPI } from "../../services/destination.services";
import { UpdateTravelDestinationAPI } from "../../services/travel.services";
import Categories from "../../components/Categories/Categories";
import './DestinationProfile.css'
import { grey } from "@mui/material/colors";

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
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: grey[100],
      }}
    >
      <IconButton
        sx={{ position: "absolute", top: 0, left: 0, p: "0 !important", m: 1 }}
        href={`/selectDestination/${travelId}`}
      >
        <ArrowCircleLeft className="btn-back" />
      </IconButton>
      <Grid
        item
        xs={12}
        sm={8}
        lg={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          padding: "40px",
          height: "100%",
          margin: "auto",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
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
              padding="30px"
              justifyContent="center"
            >
              {destination.description}
            </Typography>
          </Grid>
          <Typography align="center" variant="h6" sx={{ mb: 1 }}>
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
      <Grid
        display="flex"
        flexDirection="column"
        margin="auto"
        width={{ xs: "100%", sm: "35%" }}
      >
        <CardActions sx={{ width: "100%", mt: 2, padding: "0 !important" }}>
          <Button
            onClick={(e) => {
              submitForm(e);
            }}
            variant="text"
            size="large"
            className="btn"
            sx={{
              borderRadius: 0,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            Select Destination
          </Button>
        </CardActions>
      </Grid>
    </Box>
  );
}

export default DestinationProfile;
