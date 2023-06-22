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
import { useMediaQuery } from '@mui/material'
import { ArrowCircleLeft } from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { DeleteTravelAPI, GetTravelAPI, JoinTravelAPI, RemoveTravelAPI } from "../../services/travel.services";
import { GetProfileAPI } from "../../services/user.services";
import Footer from '../../components/Footer/Footer'
import "./TravelResume.css";

function TravelResume() {
  const isDesktop = useMediaQuery('(min-width:1200px)');
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
      <Box
        sx={{
          backgroundColor: "grey[100]",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "85%",
          marginTop: "65px",
          borderRadius: "10px",
          border: "5px solid rgba(0, 0, 0, 0.5)",
          boxShadow: "0 0 18px rgba(0, 0, 0, 8)",
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
          <Typography paddingTop="10px" paddingBottom="25px">
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
              <Typography>{showData()}</Typography>
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
            {travel !== "" &&
              !userInTravel(user.id) &&
              user.id !== travel.userId && (
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
              )}
            {travel !== "" && user.id === travel.userId && (
              <Button
                onClick={() => DeleteTravel()}
                variant="text"
                size="large"
                className="btn"
                sx={{
                  width: "100%",
                  borderRadius: 0,
                  backgroundColor: "red",
                  color: theme.palette.primary.contrastText,
                }}
              >
                Delete travel
              </Button>
            )}
            {travel !== "" &&
              userInTravel(user.id) &&
              user.id !== travel.userId && (
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
              )}
          </CardActions>
        </Grid>
      </Box>
     
      {isDesktop &&
        <Footer/>
      }
      
    </Box>
  );
}

export default TravelResume;
