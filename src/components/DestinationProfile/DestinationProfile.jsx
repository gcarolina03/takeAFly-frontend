import { Box, Avatar, Typography, Grid, IconButton, CardActions, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowCircleLeft } from "@mui/icons-material";
import PropTypes from 'prop-types'

import Categories from "../Categories/Categories";
import './DestinationProfile.css'
import { grey } from "@mui/material/colors";

function DestinationProfile({data, hide, create}) {
  const theme = useTheme();
  console.log(data)
  
  return (
    <Box
      className="boxDestination"
      sx={{
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: grey[100],
      }}
    >
      <IconButton
        sx={{ position: "absolute", top: 0, left: 0, p: "0 !important", m: 1 }}
        onClick={() => hide()}
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
            src={data.imgUrl}
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
            {data.city}
          </Typography>
          <Typography variant="body1" align="center">
            {data.country}
          </Typography>
        </Grid>

        <Grid container sx={{ display: "flex", flexDirection: "column", alignItems:'center' }}>
          <Grid item width={{ xs: "100%", lg: "35%" }}>
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
              {data.description}
            </Typography>
          </Grid>
          <Typography align="center" variant="h6" sx={{ mb: 1 }}>
            Categories
          </Typography>
          <Grid
            item
            width={{ xs: "100%", lg: "35%" }}
            sx={{
              display: "flex",
              gap: 1.5,
              flexWrap: "wrap",
              alignItems: "flex-start",
              flexDirection: "row",
            }}
          >
            <Categories data={data.categories}s/>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        margin="auto"
        width={{ xs: "100%", lg: "35%" }}
      >
        <CardActions sx={{ width: "100%", mt: 2, padding: "0 !important" }}>
          <Button
            onClick={() => {
              create()
            }}
            variant="text"
            size="large"
            className="btn"
            sx={{
              width:'100%',
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

// props validations
DestinationProfile.propTypes = {
  data: PropTypes.object,
  hide: PropTypes.func,
  create: PropTypes.func,
}

export default DestinationProfile;
