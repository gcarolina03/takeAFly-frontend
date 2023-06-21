import { Box, Tabs, Tab } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import FilterMenu from '../FilterMenu/FilterMenu'
import PropTypes from 'prop-types'

const CategoriesButtonGroup = ( { onCategorySelect } ) => {
  const theme = useTheme();
  const categories = ['All','Relax', 'Mountain Break', 'Beach', 'City', 'Party', 'Historical', 'Foodie', 'Adventure', 'Photography', 'Romantic', 'Selfcare']; // Array de categorías
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFilter = (category) => {
    onCategorySelect(category);
  };

  return (
    <Box sx={{ bgcolor: 'primary', margin: '10px', display:'flex', justifyContent:'center', maxWidth:'95%'  }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{  display: 'flex',
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center', }}
        aria-label="scrollable auto tabs example"

      >   
        {categories.map((category, index) => (
          <Tab
            key={index}
            label={category}
            onClick={() => handleFilter(category)}
            sx={{
              margin:'8px',
              color: theme.palette.primary.main,
              borderRadius: '15px',
              boxShadow: `0px 0px 2px 0.5px ${theme.palette.primary.main}`,
              '& .MuiTab-wrapper': {
                  textDecoration: 'none',
              },
            }}
          />
        ))}
      </Tabs>
            <FilterMenu/>
    </Box>
  );
}

  // props validations
CategoriesButtonGroup.propTypes = {
  onCategorySelect: PropTypes.object,
}


export default CategoriesButtonGroup