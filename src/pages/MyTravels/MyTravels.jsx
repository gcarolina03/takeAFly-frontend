import { Typography} from '@mui/material';

import { useEffect, useState  } from 'react';

import CardList from '../../components/CardList/CardList';
import { GetMyTravelsAPI } from '../../services/user.services';


function MyTravels() {
  const [travels, setTravels] = useState('')
 
  const GetTravels = async () => {
    const res = await GetMyTravelsAPI()
    setTravels(res)
  }

  useEffect(() => {
    GetTravels()
  }, [])

  return (
    <>
      <Typography textAlign='center' variant='h5' sx={{ my:3, width:'100%' }}>My Travels </Typography>
      {travels.length > 0 && <CardList data={travels} activeCategory='All' type='travel'/> } 
    </>
  );
}

export default MyTravels