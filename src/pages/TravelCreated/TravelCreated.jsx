import { Box, Avatar, Typography, Grid, Button } from "@mui/material";
import { ArrowCircleLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./TravelCreated.css";
import { useTheme } from "@emotion/react";

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
        <Link to="dashboard">
          <ArrowCircleLeft
            sx={{
              fontSize: "50px",
              top: 10,
              left: 10,
              color: "lightgray",
              position: "absolute",
            }}
          />
        </Link>
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
                width: { xs: 210, sm: 600 },
                height: { xs: 120, sm: 200 },
                my: 1,
              }}
            />
          </Grid>

          <Grid item sx={{ mb: 7, padding: "20PX" }}>
            <Typography variant="h2" align="center">
              TRAVEL CREATED!
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                semper odio eget mi iaculis dignissim. Aliquam sollicitudin
                varius metus, id pulvinar tellus facilisis sed. Duis vitae odio
                ullamcorper, convallis. Nel canna crediamo
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
            href="/profile"
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
            Back to Profile
          </Button>
        </Grid>
    </Box>
  );
}

export default TravelCreated;
