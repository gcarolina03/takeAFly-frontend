import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'

import CardList from '../../components/CardList/CardList'
import CategoriesButtonGroup from '../../components/CategoriesButtonGroup/CategoriesButtonGroup'
import { GetTravelsAPI } from '../../services/travel.services'

function Dashboard() {
  const [travels, setTravels] = useState('')
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const getTravels = async () => {
    const res = await GetTravelsAPI()
    setTravels(res)
  }

  useEffect(() => {
    getTravels()
  }, [])

  return (
   <>
      <Header/>
      <CategoriesButtonGroup onCategorySelect={handleCategorySelect}/>
     {travels.length > 0 && <CardList data={travels} activeCategory={activeCategory} type='dashboard'/> } 
  </>
  )
}

export default Dashboard