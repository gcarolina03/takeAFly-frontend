import { Card, CardHeader, IconButton, Typography} from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';

import { useEffect, useState  } from 'react';

import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header'
import { GetMyTravelsAPI } from '../../services/user.services';


function MyTravels() {
  const [travels, setTravels] = useState('')
  const previousPathname = sessionStorage.getItem('previousPathname');
  const back = (previousPathname === '/profile') ? '/profile' : '/dashboard'
 
  const GetTravels = async () => {
    const res = await GetMyTravelsAPI()
    setTravels(res)
  }

  useEffect(() => {
    GetTravels()
  }, [])

  return (
    <>
      <Header />
      <Typography textAlign='center' variant='h5' sx={{ my:3, width:'100%' }}>My Travels </Typography>
      {travels.length > 0 && <CardList data={travels} type='travel'/> } 
    </>
  );
}

export default MyTravels