import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Button,
  IconButton,
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  ArrowCircleLeft,
  CalendarMonth,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import EuroIcon from "@mui/icons-material/Euro";
import './CreateTravel.css'
import { useState } from "react";

function CreateTravel() {
   const [budget, setBudget] = useState("");
   const [departureDate, setDepartureDate] = useState("");
   const [returnDate, setReturnDate] = useState("");
   const [airport, setAirport] = useState("");
   const [visibility, setVisibility] =useState("")

   function handleBudget(e){
    setBudget(e.target.value)
   }

   function handleDeparture(e){
    setDepartureDate(e.target.value)
   }

   function handleReturn(e){
    setReturnDate(e.target.value)
   }

   function handleAirport(e){
    setAirport(e.target.value)
   }

   function handleVisibility(e){
    setVisibility(e.target.value)
   }




    const theme = useTheme()
  return (
    <Box className="box1">
      <Grid
        xs={12}
        sm={12}
        lg={5}
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: { lg: "60px" },
          height: "100%",
        }}
      >
        <Card
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-around",
            height: "100%",
            width: "100%",
          }}
          raised={true}
        >
          <IconButton sx={{ position: "fixed" }} href="/">
            <ArrowCircleLeft
              sx={{
                marginTop: "20px",
                fontSize: "50px",
                color: "lightgray",
              }}
            />
          </IconButton>
          <CardHeader
            sx={{ marginLeft: "35%", marginTop: "20%", paddingBottom: "40px" }}
            title="Create a travel"
          />
          <CardContent>
            <TextField
              fullWidth
              margin="dense"
              label="Budget"
              variant="standard"
              type="number"
              placeholder="30"
              required
              sx={{ marginTop: "20px" }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <EuroIcon />
                  </IconButton>
                ),
              }}
            ></TextField>
            <TextField
              fullWidth
              margin="dense"
              variant="standard"
              label="Departure Date"
              type="date"
              required
              sx={{ marginTop: "20px" }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <CalendarMonth />
                  </IconButton>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
            <TextField
              fullWidth
              margin="dense"
              variant="standard"
              label="Return Date"
              type="date"
              sx={{ marginTop: "20px" }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <CalendarMonth />
                  </IconButton>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
            <TextField
              fullWidth
              margin="dense"
              label="Origin Airport"
              variant="standard"
              type="text"
              required
              sx={{ marginTop: "20px" }}
            ></TextField>
            <div style={{ marginTop: "20px" }}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  onChange={(e) => {
                    handleVisibility(e);
                  }}
                  value="private"
                  control={<Radio />}
                  label="Private"
                  checked
                />
                <FormControlLabel
                  onChange={(e) => {
                    handleVisibility(e);
                  }}
                  value="public"
                  control={<Radio />}
                  label="Public"
                />
              </RadioGroup>
            </div>
          </CardContent>
          <CardActions
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              display: "flex",
              justifyItems: "center",
              justifyContent: "center",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Button
              href="/destination"
              onClick={(e) => {
                submitForm(e);
              }}
              size="large"
              sx={{ color: "whitesmoke" }}
              variant="text"
            >
              Create
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}

export default CreateTravel;
