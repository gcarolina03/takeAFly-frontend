import {
  Box,
  Avatar,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

function TravelCreated() {
  const theme = useTheme();

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
            src="https://www.allianz-partners.com/home-relaunch/products/travel/_jcr_content/root/parsys/stage_copy/stageimage.img.82.3360.jpeg/1656764032001/adobestock-274341667.jpeg"
            alt="Destination Avatar"
            variant="square"
            sx={{
              width: { xs: 300, sm: 800 },
              height: { xs: 150, sm: 200 },
              my: 1,
            }}
          />
        </Grid>
        <Grid
          container
          sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
        >
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
            <Typography variant="h2" align="center" margin='auto'>
              TRAVEL CREATED!
            </Typography>
            <Typography variant="h5" align="center" margin= 'auto'>
              Enjoy your adventure, traveler!
            </Typography>
            <Typography
              variant="body2"
              align="justify"
              sx={{ fontSize: { xs: "15px", sm: "20px" } }}
              padding="30px"
              justifyContent="center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              semper odio eget mi iaculis dignissim. Aliquam sollicitudin varius
              metus, id pulvinar tellus facilisis sed. Duis vitae odio
              ullamcorper, convallis. Nel canna crediamo
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

export default TravelCreated;
