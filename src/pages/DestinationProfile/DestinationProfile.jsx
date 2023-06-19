import { Box, Avatar, Typography, Grid } from "@mui/material";
import { ArrowCircleLeft } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import './DestinationProfile.css'
import Categories from "../../components/Categories/Categories";

function DestinationProfile() {
  return (
    <Box
      className="box1"
      sx={{
        justifyContent: "center",
        backgroundColor: grey[100],
        height: "100%",
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
          flexDirection: "column",
          padding: "40px",
          height: "100%",
        }}
      >
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src="https://www.timeoutabudhabi.com/cloud/timeoutabudhabi/2021/11/30/Dreamy-beaches-in-middle-east.jpg"
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
            Palma de Mallorca
          </Typography>
          <Typography variant="body1" align="center">
            España
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              semper odio eget mi iaculis dignissim. Aliquam sollicitudin varius
              metus, id pulvinar tellus facilisis sed. Duis vitae odio
              ullamcorper, convallis
            </Typography>
          </Grid>
          <Typography
            align="center"
            variant="h6"
            sx={{ mb: 1 }}
            color={grey[600]}
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
    </Box>
  );
}

export default DestinationProfile;
