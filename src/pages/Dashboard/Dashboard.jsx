import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'

import TravelCardList from '../../components/TravelCardList/TravelCardList'
function Dashboard() {
  const travels = [
    {
      travelId: 1,
      title: 'Viaje 1',
      imageUrl: 'https://ejemplo.com/imagen1.jpg',
      dates: '01/01/2023 - 07/01/2023',
      budget: '$1000',
    },
    {
      travelId: 2,
      title: 'Viaje 2',
      imageUrl: 'https://ejemplo.com/imagen2.jpg',
      dates: '15/02/2023 - 22/02/2023',
      budget: '$1500',
    },
    {
      travelId: 3,
      title: 'Viaje 3',
      imageUrl: 'https://ejemplo.com/imagen3.jpg',
      dates: '10/03/2023 - 17/03/2023',
      budget: '$1200',
    },
    {
      travelId: 4,
      title: 'Viaje 4',
      imageUrl: 'https://ejemplo.com/imagen3.jpg',
      dates: '10/03/2023 - 17/03/2023',
      budget: '$1200',
    }, 
      {
      travelId: 5,
      title: 'Viaje 5',
      imageUrl: 'https://ejemplo.com/imagen3.jpg',
      dates: '10/03/2023 - 17/03/2023',
      budget: '$1200',
    },
      {
      travelId: 6,
      title: 'Viaje 6',
      imageUrl: 'https://ejemplo.com/imagen3.jpg',
      dates: '10/03/2023 - 17/03/2023',
      budget: '$1200',
    },
      {
      travelId: 7,
      title: 'Viaje 7',
      imageUrl: 'https://ejemplo.com/imagen3.jpg',
      dates: '10/03/2023 - 17/03/2023',
      budget: '$1200',
    },
    
  ];


  return (
   <> <Header/>
    <TravelCardList travels={ travels }/>
  </>
  )
}

export default Dashboard