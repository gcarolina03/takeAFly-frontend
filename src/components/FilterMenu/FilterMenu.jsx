import { useTheme } from "@emotion/react";
import { useState } from 'react';
import { Button, Menu, MenuItem, TextField } from '@mui/material';
import { Widgets } from "@mui/icons-material";
import './FilterMenu.css'

function FilterMenu() {
    const theme= useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [origin, setOrigin] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [budget, setBudget] = useState('');


  const handleOrigin = (e) => {
    setOrigin(e.target.value)
  }
  console.log(origin)
   const handleDepartureDate = (e) => {
     setDepartureDate(e.target.value);
   };
  console.log(departureDate)
    const handleBudget = (e) => {
      setBudget(e.target.value);
    };
    console.log(budget)
const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  

  const handleFilterSubmit = (travels) => {
    const filteredTravels = travels.filter((travel) => {
        if (filterValue.originAirport && travel.originAirport !== filterValue.originAirport) {
          return false;
        }
        if (filterValue.departureDate && travel.departureDate !== filterValue.departureDate) {
          return false;
        }
        if (filterValue.budget && travel.budget !== filterValue.budget) {
          return false;
        }
        return true;
      });
      setFilterValue(filteredTravels);
      handleMenuClose();
  };

  return (
    <div className="filtros">
    
      <Button onClick={handleButtonClick} sx={{color:'white'}}>Sort</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <TextField label="Origin Airport" onChange={handleOrigin} />
        </MenuItem>
        <MenuItem>
          <TextField label="Departure Date" onChange={handleDepartureDate} />
        </MenuItem>
        <MenuItem>
          <TextField label="Budget" onChange={handleBudget} />
        </MenuItem>
        <MenuItem>
          <Button onClick={handleFilterSubmit}>Apply Sort</Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FilterMenu;
