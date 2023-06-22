import {
  Box,
  Avatar,
  Typography,
  Grid,
  CardActions,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

import { useNavigate, useParams } from "react-router-dom";

import { DeleteTravelAPI, GetTravelAPI, JoinTravelAPI, RemoveTravelAPI } from "../../services/travel.services";
import "./TravelResume.css";
import { useEffect, useState } from "react";
import { ArrowCircleLeft } from "@mui/icons-material";
import { GetProfileAPI } from "../../services/user.services";

function TravelResume() {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate()
  const [travel, setTravel] = useState('')
  const [user, setUser] = useState('')
  
  const getTravel = async () => {
    const res = await GetTravelAPI(id)
    setTravel(res)
  }

  console.log(travel)

  const getUser = async () => {
    const res = await GetProfileAPI()
    setUser(res)
  }

  const JoinTravel = async () => {
    await JoinTravelAPI(id)
    navigate('/travelJoined')
  }

  const RemoveTravel = async () => {
    await RemoveTravelAPI(id)
    navigate('/profile/myTravels')
  }

  const DeleteTravel = async () => {
    await DeleteTravelAPI(id)
    navigate('/profile/myTravels')
  }

  const userInTravel = (uId) => {
    return travel.users.some(user => user.id === uId);
  } 
  

  useEffect(() => {
    getTravel()
    getUser()
  }, [])

  const showData = () => {
    if(travel !== '' && user !== '') {
      return (
        <>
          <IconButton
            sx={{ position: "absolute", top: 0, left: 0, p: "0 !important", m: 1 }}
            href="/dashboard"
          >
          <ArrowCircleLeft className="btn-back" />
          </IconButton>
            <Grid display="flex" flexDirection="column" justifyContent="center">
            <div>
              <h2>Travel Destination</h2>{" "}
            </div>
              <div className="information"> {travel.destination.city} </div>
            <div>
              <h2>Travel Date</h2>{" "}
            </div>
              <div className="information">{travel.departure_date}</div>
            <div>
              <h2>Travel Return Date</h2>{" "}
            </div>
              <div className="information">{travel.return_date}</div>
            <div>
              <h2>Budget:</h2> {travel.budget}€
            </div>
          </Grid>
        </>
      )
    } else {
      <CircularProgress />;
    }
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
              {showData()}
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
          {travel !== '' && !userInTravel(user.id) && user.id !== travel.userId && 
            <Button
              onClick={() => JoinTravel()}
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
          }
          {travel !== '' && user.id === travel.userId && 
            <Button
              onClick={() => DeleteTravel()}
              variant="text"
              size="large"
              className="btn"
              sx={{
                borderRadius: 0,
                backgroundColor: 'red',
                color: theme.palette.primary.contrastText,
              }}
            >
              Delete travel
            </Button>
          }
          {travel !== '' && userInTravel(user.id) && user.id !== travel.userId &&
            <Button
              onClick={() => RemoveTravel()}
              variant="text"
              size="large"
              className="btn"
              sx={{
                borderRadius: 0,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Leave Travel
            </Button>
          }

          
        </CardActions>
      </Grid>
    </Box>
  );
}

export default TravelResume;
