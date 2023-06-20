import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'

import CardList from '../../components/CardList/CardList'
import { GetTravelsAPI } from '../../services/travel.services'
function Dashboard() {
  const [travels, setTravels] = useState('')

  const getTravels = async () => {
    const res = await GetTravelsAPI()
    setTravels(res)
  }

  useEffect(() => {
    getTravels()
  }, [])

  console.log(travels)

  return (
   <>
      <Header/>
     {travels.length > 0 && <CardList travels={ travels } type='travel'/> } 
  </>
  )
}

export default Dashboard