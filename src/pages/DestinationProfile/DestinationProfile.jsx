import {
  Box,
  Avatar,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { ArrowCircleLeft } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./DestinationProfile.css";
import Categories from "../../components/Categories/Categories";
import { useTheme } from "@emotion/react";

function DestinationProfile() {
  const theme = useTheme();
  return (
    <Box
      id="boxDestination"
      sx={{
        margin: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
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
            alignItems: 'center'
          }}
        >
          <Avatar
            src="https://www.timeoutabudhabi.com/cloud/timeoutabudhabi/2021/11/30/Dreamy-beaches-in-middle-east.jpg"
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
            Palma de Mallorca
          </Typography>
          <Typography variant="body1" align="center">
            España
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              semper odio eget mi iaculis dignissim. Aliquam sollicitudin varius
              metus, id pulvinar tellus facilisis sed. Duis vitae odio
              ullamcorper, convallis. Nel canna crediamo
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              align="center"
              variant="h6"
              sx={{ mb: 1 }}
              color={grey[600]}
              padding='30px'
            >
              Categories
            </Typography>

            <Grid
              container
              justifyContent="center"
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                width: "100%",
                flexDirection: "row",
                justifyContent: 'center'
              }}
            >
              <Categories />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          width: '30%'
        }}
      >
        <Button
          href="/travelResume"
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
          Select Destination
        </Button>
      </Grid>
    </Box>
  );
}

export default DestinationProfile;
