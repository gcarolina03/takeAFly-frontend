import { Box, Avatar, Typography, Grid, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import "./TravelCreated.css";

function TravelCreated() {
  const theme = useTheme();
  return (
    <Box
      id="boxCreatedTravel"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:'center',
            padding: "30px",
            width:{ xs: '100%', sm: '60%' },
          }}
        >
          <Avatar
            src="https://www.allianz-partners.com/home-relaunch/products/travel/_jcr_content/root/parsys/stage_copy/stageimage.img.82.3360.jpeg/1656764032001/adobestock-274341667.jpeg"
            alt="Destination Avatar"
            variant="square"
            sx={{
              width: { xs: 210, sm: 800 },
              height: { xs: 120, sm: 200 },
              my: 1,
            }}
          />
          <Grid item sx={{ padding: "20PX" }}>
            <Typography variant="h2" align="center">
            TRAVEL CREATED!
            </Typography>
            <Typography variant="h5" align="center" sx={{mb:'30px'}} >
              Enjoy your adventure, traveler!
            </Typography>
            <Typography
                variant="body2"
                align="justify"
                sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                justifyContent="center"
              >
                Congratulations on creating your travel itinerary with Take A Fly! Get ready to embark on an unforgettable adventure filled with breathtaking landscapes, vibrant cultures, and cherished memories. We can&apos;t wait to be a part of your travel story!
              </Typography>
            </Grid>

        <Grid
          display="flex"
          flexDirection="column"
          width={{ xs: "100%", lg: "35%" }}
          sx={{m:'0 !important', position:{xs: 'relative', sm:'absolute'}, bottom:0}}
        >
          <Button
            href="/profile/travels"
            variant="text"
            size="large"
            className="btn"
            sx={{
              borderRadius: 0,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              mt: 2,
              padding: "0 !important",
            }}
          >
            Back to dashboard
          </Button>
          </Grid>
          </Grid>
      </Box>
  );
}

export default TravelCreated;