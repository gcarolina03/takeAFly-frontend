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
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: "40px",
          mx:'20px',
          width:{ xs: '100%', sm: '60%' , lg: '35%'},
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

        <Grid container sx={{ display: "flex", flexDirection: "column", alignItems:'center'}}>
          <Grid item width={{ xs: "100%" }}>
            <Typography variant="h6" align="left" sx={{ mb: 1, pl:{xs: '30px', sm: 0} }}>
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
            width={{ xs: "100%" }}
            sx={{
              display: "flex",
              px:'30px',
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
        width={{ xs: "100%", lg: "35%" }}
        sx={{m:'0 !important', position:'absolute', bottom:0}}
      >
        <CardActions sx={{ width: "100%", m: 0, padding: "0 !important" }}>
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
