import { Card, CardHeader, IconButton } from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';

import { useEffect, useState  } from 'react';

import CardList from '../../components/CardList/CardList';
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
      <Card 
      >
        <IconButton  sx={{ position: "sticky", p:'0 !important', m:1 }} href={`${back}`} >
          <ArrowCircleLeft className="btn-back"/>
        </IconButton>
        
        <CardHeader
          sx={{ textAlign:'center', pt:0, mt:0, paddingBottom: "10px" }}
          title="Destination"
        />
    
        {travels.length > 0 && <CardList data={travels} type='travel'/> } 
      </Card>
  );
}

export default MyTravels