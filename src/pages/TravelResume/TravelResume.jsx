import {
  Box,
  Avatar,
  Typography,
  Grid,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowCircleLeft } from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { DeleteTravelAPI, GetTravelAPI, JoinTravelAPI, RemoveTravelAPI } from "../../services/travel.services";
import { GetProfileAPI } from "../../services/user.services";
import "./TravelResume.css";

function TravelResume() {
  const theme = useTheme();
  const navigate = useNavigate()
  // DATA
  const { id } = useParams();
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
    navigate('/travel/joined')
  }

  const RemoveTravel = async () => {
    await RemoveTravelAPI(id)
    navigate('/profile/travels')
  }

  const DeleteTravel = async () => {
    await DeleteTravelAPI(id)
    navigate('/profile/travels')
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
      className="boxResume"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconButton
        sx={{ position: "absolute", left: 0, top:80, p: "0 !important", m: 1 }}
        href="/dashboard"
      >
        <ArrowCircleLeft className="btn-back" />
      </IconButton>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "40px",
            alignItems:'center',
            width:{ xs: '100%', sm: '60%' , lg: '35%'},
          }}
        >
          <Avatar
            src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-3278215.jpg&fm=jpg"
            alt="Destination Avatar"
            variant="square"
            sx={{
              width: { xs: 300, sm: 800 },
              height: { xs: 150, sm: 200 },
            }}
          />
          <Grid
            sx={{
              display: "flex",
              gap: 1.5,
              flexWrap: "wrap",
              alignItems: "flex-start",
              width: "100%",
              flexDirection: "column",
            }}
          > 
            <Typography paddingTop="10px" paddingBottom="10px">
              <h1>Resume</h1>
            </Typography>
            <Typography>{showData()}</Typography>
          </Grid>
        </Grid>
        
        <Grid
          display="flex"
          flexDirection="column"
          width={{ xs: "100%", lg: "35%" }}
          sx={{m:'0 !important', position:{xs: 'relative', sm:'absolute'}, bottom:0}}
        >
          {travel !== "" && !userInTravel(user.id) && user.id !== travel.userId && (
              <Button
                onClick={() => JoinTravel()}
                variant="text"
                size="large"
                className="btn"
                sx={{ borderRadius: 0, backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
              >
                Join a travel
              </Button>
            )}
          {travel !== "" && user.id === travel.userId && (
            <Button
              onClick={() => DeleteTravel()}
              variant="text"
              size="large"
              className="btn"
              sx={{ borderRadius: 0, backgroundColor: "red", color: theme.palette.primary.contrastText }}
            >
              Delete travel
            </Button>
          )}
          {travel !== "" && userInTravel(user.id) && user.id !== travel.userId && (
              <Button
                onClick={() => RemoveTravel()}
                variant="text"
                size="large"
                className="btn"
                sx={{ borderRadius: 0, backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.contrastText }}
              >
                Leave Travel
              </Button>
            )}
        </Grid>
      </Box>
  );
}

export default TravelResume;
