import { Typography } from '@mui/material';
import { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import CategoriesButtonGroup from '../../components/CategoriesButtonGroup/CategoriesButtonGroup'
import { GetAllDestinationsAPI } from '../../services/destination.services';
import CardList from '../../components/CardList/CardList';


function SelectDestination() {
  const { travel } = useParams()
  const [destinations, setDestinations] = useState('')
  const [activeCategory, setActiveCategory] = useState('All');

  const GetAllDestinations = async () => {
    const res = await GetAllDestinationsAPI()
    setDestinations(res)
  }


  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    GetAllDestinations()
  }, [])

  return (
    <>

      <Typography textAlign='center' variant='h5' sx={{ my:3, width:'100%' }}>Select a Destination</Typography>
      <CategoriesButtonGroup onCategorySelect={handleCategorySelect}/>
      {destinations.length > 0 && <CardList data={destinations} activeCategory={activeCategory} travel={travel} type='destination'/> } 
    </>
  );
}

export default SelectDestination