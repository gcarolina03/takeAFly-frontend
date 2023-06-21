import { Typography } from '@mui/material';
import { useEffect, useState  } from 'react';
import { GetAllDestinationsAPI } from '../../services/destination.services';
import CardList from '../../components/CardList/CardList';
import { useParams } from 'react-router-dom';


function SelectDestination() {
  const { travel } = useParams()
  const [destinations, setDestinations] = useState('')

  const GetAllDestinations = async () => {
    const res = await GetAllDestinationsAPI()
    setDestinations(res)
  }

  useEffect(() => {
    GetAllDestinations()
  }, [])

  return (
    <>
      <Typography textAlign='center' variant='h5' sx={{ my:3, width:'100%' }}>Select a Destination</Typography>
      {destinations.length > 0 && <CardList data={destinations} travel={travel} type='destination'/> } 
    </>
  );
}

export default SelectDestination