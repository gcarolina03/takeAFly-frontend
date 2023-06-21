import { useTheme } from "@emotion/react";
import { useState } from 'react';
import { Button, Menu, MenuItem, TextField } from '@mui/material';


function FilterMenu() {
    const theme= useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterValue, setFilterValue] = useState({ 
    originAirport: '',
    departureDate: '',
    budget:''});

const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange =(event) => {
    const { name, value } = event.target;
    setFilterValue((prevFilterValues) => ({
      ...prevFilterValues,
      [name]: value
    }));
  };

  const handleFilterSubmit = () => {
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
      setFilterTravels(filteredTravels);
      handleMenuClose();
  };

  return (
    <div>
      <Button onClick={handleButtonClick}
       sx={{marginRigth: '8px',
       marginLeft: '0px',
       marginTop:'12px',
       color: theme.palette.primary.main,
       borderRadius: '15px',
       boxShadow: `0px 0px 2px 0.5px ${theme.palette.primary.main}`}}>
        Sort
        </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
       
      >
        <MenuItem>
          <TextField
            label="Origin Airport"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </MenuItem>
        <MenuItem>
          <TextField
            label="Departure Date"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </MenuItem>
        <MenuItem>
          <TextField
            label="Budget"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </MenuItem>
        <MenuItem>
          <Button onClick={handleFilterSubmit}>Apply Sort</Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FilterMenu;
