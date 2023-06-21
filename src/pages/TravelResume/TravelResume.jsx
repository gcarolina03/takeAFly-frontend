import {
  Box,
  Avatar,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import "./TravelResume.css";
import { grey } from "@mui/material/colors";
import TravelResume from '../../components/TravelResume/TravelResume'

function TravelResu() {
  const theme = useTheme();
  const { id } = useParams();


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
            src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-3278215.jpg&fm=jpg"
            alt="Destination Avatar"
            variant="square"
            sx={{
              width: { xs: 300, sm: 800 },
              height: { xs: 150, sm: 200 },
              my: 1,
            }}
          />
        </Grid>
        <Typography paddingTop="10px" paddingBottom="20px">
          <h1>Resume</h1>
        </Typography>
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
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
            <Typography>
              <TravelResume id={id} />
            </Typography>
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
            href="/dashboard"
            variant="text"
            size="large"
            className="btn"
            sx={{
              borderRadius: 0,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            Join a travel
          </Button>
        </CardActions>
      </Grid>
    </Box>
  );
}

export default TravelResu;
