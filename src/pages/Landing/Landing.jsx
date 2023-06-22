import { useEffect, useState } from 'react'
import CardList from '../../components/CardList/CardList'
import CategoriesButtonGroup from '../../components/CategoriesButtonGroup/CategoriesButtonGroup'
import { GetTravelsAPI } from '../../services/travel.services'

function Landing() {
  const [travels, setTravels] = useState([])
  const [activeCategory, setActiveCategory] = useState('All');
  const [filters, setFilters] = useState('');

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const handleMoreFilters = (filt) => {
    setFilters(filt);
  };

  console.log(filters)

  const getTravels = async () => {
    const res = await GetTravelsAPI()
    setTravels(res)
  }

  useEffect(() => {
    getTravels()
  }, [])

  return (
    <>
      <CategoriesButtonGroup onCategorySelect={handleCategorySelect} onFilters={handleMoreFilters}/>
      {travels.length > 0 && <CardList data={travels} activeCategory={activeCategory} filters={filters} type='dashboard'/> }
    </>
  )
}

export default Landing