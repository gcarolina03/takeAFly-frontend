import { Box, Tabs, Tab } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import FilterMenu from '../FilterMenu/FilterMenu'
import PropTypes from 'prop-types'
import { GetCategoriesAPI } from "../../services/category.service";

const CategoriesButtonGroup = ( { onCategorySelect } ) => {
  const theme = useTheme();
  const [categories, setCategories] = useState([])
  const [value, setValue] = useState(0);

  const listCategories = async () => {
      const res = await GetCategoriesAPI() 
      setCategories(res)
  }

  useEffect(() => {
      listCategories()
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFilter = (category) => {
    onCategorySelect(category);
  };

  return (
    <Box sx={{ bgcolor: 'primary', display:'flex', justifyContent:'center' , marginTop: '20px'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{  display: 'flex',
        width: '90%',
        justifyContent: 'center',
        alignContent: 'center', }}
        aria-label="scrollable auto tabs example"

      >   
      <Tab
        key='all'
        label='All'
        onClick={() => handleFilter('All')}
        sx={{
          margin:'8px',
          color: theme.palette.primary.main,
          borderRadius: '18px',
          boxShadow: `0px 0px 2px 0.5px ${theme.palette.primary.main}`,
          '& .MuiTab-wrapper': {
              textDecoration: 'none',
          },
        }}
      />
        {categories.map((category, index) => (
          <Tab
            key={index}
            label={category.title}
            onClick={() => handleFilter(category)}
            sx={{
              margin:'10px',
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