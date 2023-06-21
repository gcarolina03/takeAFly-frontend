import { useState } from "react";
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
import { ArrowCircleLeft, CalendarMonth } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import EuroIcon from "@mui/icons-material/Euro";
import "./JoinTravel.css";

function JoinTravel() {
  const [budget, setBudget] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [airport, setAirport] = useState("");
  const [visibility, setVisibility] = useState("private");

  function handleBudget(e) {
    setBudget(e.target.value);
  }

  function handleDeparture(e) {
    setDepartureDate(e.target.value);
  }

  function handleReturn(e) {
    setReturnDate(e.target.value);
  }

  function handleAirport(e) {
    setAirport(e.target.value);
  }

  function handleVisibility(e) {
    setVisibility(e.target.value);
  }

  function validateForm() {
    if (Number(budget) < 0) {
      alert("Budget cannot be less than 0");
      return false;
    }

    const departure = new Date(departureDate);
    const returnD = new Date(returnDate);

    if (departure >= returnD) {
      alert("Return date must be greater than departure date");
      return false;
    }

    if (airport.length < 3) {
      alert("Introduce a valid airport");
      return false;
    }

    return true;
  }

  function submitForm(e) {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission
      console.log("Form submitted successfully!");
    }
  }

  const theme = useTheme();
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
            title="Join a trip"
          />
          <CardContent>
            <TextField
              fullWidth
              margin="dense"
              label="Budget"
              error={budget == 0}
              helperText={budget == 0 ? "Introduce valid budget" : ""}
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
              value={budget}
              onChange={handleBudget}
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
              value={departureDate}
              onChange={handleDeparture}
            ></TextField>
            <TextField
              fullWidth
              margin="dense"
              variant="standard"
              label="Return Date"
              error={new Date(returnDate) <= new Date(departureDate)}
              helperText={
                new Date(returnDate) <= new Date(departureDate)
                  ? "Introduce a valid date"
                  : ""
              }
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
              value={returnDate}
              onChange={handleReturn}
            ></TextField>
            <TextField
              fullWidth
              margin="dense"
              label="Origin Airport"
              variant="standard"
              type="text"
              required
              sx={{ marginTop: "20px" }}
              value={airport}
              onChange={handleAirport}
              error={airport.length < 3 && airport !== ""}
              helperText={
                airport.length < 3 &&
                airport !== "" &&
                "Introduce a valid airport"
              }
            ></TextField>
            <div style={{ marginTop: "20px" }}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={visibility}
                onChange={handleVisibility}
              >
                <FormControlLabel
                  value="private"
                  control={<Radio />}
                  label="Private"
                  checked={visibility === "private"}
                />
                <FormControlLabel
                  value="public"
                  control={<Radio />}
                  label="Public"
                  checked={visibility === "public"}
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
              onClick={submitForm}
              size="large"
              sx={{ color: "whitesmoke" }}
              variant="text"
            >
              Next
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}

export default JoinTravel;
