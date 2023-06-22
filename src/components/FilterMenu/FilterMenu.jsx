import { Autocomplete, Button, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import EuroIcon from "@mui/icons-material/Euro";
import { CalendarMonth } from "@mui/icons-material";

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { ListAirportsAPI } from "../../services/airport.services";
import './FilterMenu.css'

function FilterMenu({onFilters}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [budget, setBudget] = useState('');
  const [departureDate, setDepartureDate] = useState('')
  const [airports, setAirports] = useState("");
  const [airport, setAirport] = useState('');

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

  // AIRPORT
  function handleAirport(e, value) {
    setAirport(value)
  }

  function validateAirport() {
    return airport === ''
  }

  // FILTER
  const handleMoreFilters = (filter) => {
    onFilters(filter);
  };

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


 const handleFilterSubmit = () => {
      handleMoreFilters({budget, departureDate, airport})
      handleMenuClose();
  }

  const cleanFilters = () => {
      setAirport('')
      setBudget('')
      setDepartureDate('')
      handleMoreFilters({budget, departureDate, airport})
      handleMenuClose();
  }

  return (
    <div className="filtros">
      <Button onClick={handleButtonClick} sx={{color:'white'}}>Filters</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <TextField
            fullWidth
            margin="dense"
            label="Budget"
            error={validateBudget() && budget !== ''}
            helperText={validateBudget()  && budget !== '' ? "Introduce valid budget" : ""}
            variant='outlined'
            type="number"
            placeholder="0"
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
        </MenuItem>
        <MenuItem>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            label="Departure Date"
            type="date"
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
        </MenuItem>
        <Autocomplete
        sx={{mx:2}}
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
              variant="outlined"
            />
          )}
        />
        <MenuItem sx={{justifyContent:'space-between'}}>
          <Button onClick={handleFilterSubmit}>Apply Filters</Button>
          <Button sx={{color:'red'}} onClick={cleanFilters}>clean</Button>
          
        </MenuItem>
      </Menu>
    </div>
  );
}

  // props validations
FilterMenu.propTypes = {
  onFilters: PropTypes.func,
}

export default FilterMenu;
