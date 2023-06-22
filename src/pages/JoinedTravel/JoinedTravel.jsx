import { Box, Avatar, Typography, Grid, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import Footer from "../../components/Footer/Footer";

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
      <Box
        sx={{
          backgroundColor: "grey[100]",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width:"85%",
          marginTop: "65px",
          borderRadius: "10px",
          border: "2px solid rgba(0, 0, 0, 0.5)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 5)",
          padding:'19px',
        }}
      >
        {" "}
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
              alignItems: "center",
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
          </Grid>

          <Grid item sx={{ mb: 7, padding: "20PX" }}>
            <Typography variant="h2" align="center">
              JOINED TO TRAVEL!
            </Typography>
            <Typography variant="h5" align="center">
              Enjoy your adventure, traveler!
            </Typography>
          </Grid>

          <Grid container sx={{ display: "flex", flexDirection: "column" }}>
            <Grid item>
              <Typography variant="h6" align="left" sx={{ mb: 1 }}></Typography>
              <Typography
                variant="body2"
                align="justify"
                sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                padding="30px"
                justifyContent="center"
              >
                We are delighted to inform you that you have successfully joined
                our travel expedition with Wanderlust Travels! Prepare yourself
                for an extraordinary journey filled with awe-inspiring
                landscapes, captivating cultures, and unforgettable moments.
                We&pos;re thrilled to have you as part of our travel family!
              </Typography>
            </Grid>

            <Grid item>
              <Grid
                container
                justifyContent="center"
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  width: "100%",
                  flexDirection: "row",
                }}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "30%" },
          }}
        >
          <Button
            href="/dashboard"
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
      </Box>
      <Footer/>
    </Box>
    
  );
}

export default TravelCreated;
