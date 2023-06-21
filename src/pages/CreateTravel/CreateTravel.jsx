import { useEffect, useState } from "react";
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
  Autocomplete,
} from "@mui/material";
import { ArrowCircleLeft, CalendarMonth } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import EuroIcon from "@mui/icons-material/Euro";
import "./CreateTravel.css";
import { ListAirportsAPI } from "../../services/airport.services";
import { CreateTravelAPI } from "../../services/travel.services";
import ErrorMsgComp from "../../components/ErrorMsg/ErrorMsg";

function CreateTravel() {
  const theme = useTheme();
  const navigate = useNavigate()
  // DATA
  const [budget, setBudget] = useState('');
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [airport, setAirport] = useState("");
  const [visibility, setVisibility] = useState("private");
  const [airports, setAirports] = useState("");
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setShowError] = useState(false)

  const getAirports= async () => {
    const res = await ListAirportsAPI()
    setAirports(res)
  }

  useEffect(() => {
    getAirports()
  }, [])

  // BUDGET
  function handleBudget(e) {
    setBudget(e.target.value);
  }

  function validateBudget() {
    return budget <= 0
  }

  // DATE DEPARTURE
  function handleDeparture(e) {
    setDepartureDate(e.target.value);
  }

  function validateDeparture() {
    const today = new Date();
    const departure = new Date(departureDate)

    return (departure < today)
  }

  // DATE RETURN
  function handleReturn(e) {
    setReturnDate(e.target.value);
  }

  function validateReturn() {
    const departure = new Date(departureDate);
    const returnD = new Date(returnDate);

    return (departure >= returnD)
  }

  // AIRPORT
  function handleAirport(e, value) {
    setAirport(value)
  }

  function validateAirport() {
    return airport === ''
  }

  // VISIBILITY
  function handleVisibility(e) {
    setVisibility(e.target.value);
  }

  // CREATE TRAVEL SERVICE
  const CreateTravelService = async () => {
    const res = await CreateTravelAPI(budget, departureDate, returnDate, airport.id, visibility)
    console.log(res)
    if (res === 'error') {
      setErrorMsg('Error! Cannot create travel')
      showErrorMsg()
    } else {
      navigate(`/selectDestination/${res.travel.id}`)
    }
  }

  // ERROR 
  const showErrorMsg = () => {
    setShowError(true)
    setTimeout(() => { setShowError(false) }, 4000);
  }

  const hideErrorMsg = () => {
    setShowError(false)
  }

  function submitForm(e) {
    e.preventDefault();
     if (
      !validateBudget() && 
      !validateDeparture() &&
      !validateReturn() && 
      !validateAirport() 
    ) {
      CreateTravelService()
    } else {
      setErrorMsg('Warning! Some fields are incorrect or empty.')
      showErrorMsg()
    }
  }

  return (
    <Box className="box1">
      <Grid
      item
        xs={12}
        sm={12}
        lg={5}
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          py: { lg: "60px" },
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
          <IconButton  sx={{ position: "fixed", p:'0 !important', m:1 }} href="/dashboard">
            <ArrowCircleLeft className="btn-back"
            />
          </IconButton>
          
          <CardHeader
            sx={{ textAlign:'center', pt:'50px' }}
            title="Create a travel"
          />
          {showError && (
            <ErrorMsgComp errorMsg={errorMsg} show={showError} hideErrorMsg={hideErrorMsg} />
          )}
          <CardContent>
            <TextField
              fullWidth
              margin="dense"
              label="Budget"
              error={validateBudget() && budget !== ''}
              helperText={validateBudget()  && budget !== '' ? "Introduce valid budget" : ""}
              variant="standard"
              type="number"
              placeholder="30"
              required
              sx={{ marginTop: "20px" }}
              InputProps={{
                endAdornment: (
                  <IconButton disabled>
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
              error={validateDeparture()}
              helperText={validateDeparture() ? "Introduce valid departure date" : ""}
              sx={{ marginTop: "20px" }}
              InputProps={{
                endAdornment: (
                  <IconButton disabled>
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
              error={validateReturn()}
              helperText={validateReturn() ? "Return date must be greater than departure date" : ""}
              type="date"
              sx={{ marginTop: "20px" }}
              InputProps={{
                endAdornment: (
                  <IconButton disabled>
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
            <Autocomplete
              options={airports}
              getOptionLabel={(option) => `${option.name} (${option.code})`}
              value={airport || null}
              onChange={handleAirport}
              error={validateAirport()}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Origin Airport"
                  variant="standard"
                  sx={{ marginTop: "20px" }}
                />
              )}
          />
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
          <Box sx={{position:'absolute', width:'100%',
        bottom:0}}>
            <CardActions sx={{width:'100%', mt:2, padding:'0 !important'}} >
              <Button
                onClick={(e) => {
                  submitForm(e);
                }}
                variant="text"
                size="large"
                className="btn"
                sx={{ 
                  borderRadius:0,
                  backgroundColor:theme.palette.primary.main,
                  color:theme.palette.primary.contrastText,
                }}
              >
                Create
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}

export default CreateTravel;
