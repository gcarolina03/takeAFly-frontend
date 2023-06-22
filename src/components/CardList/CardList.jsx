import PropTypes from 'prop-types'
import CardTravel from '../CardTravel/CardTravel'
import CardDestination from '../CardDestination/CardDestination';
import './CardList.css'
import { Grid } from '@mui/material';

function CardList({ data, seeDestination, type, activeCategory, filters }) {
  const filterPublicTravel = () => {
    let dataFilter = data 
    if(activeCategory !== 'All') {
      dataFilter = dataFilter.filter((travel) => travel.destination.categories.some((category) => category.id == activeCategory))
    }

    if (filters && filters.airport !== '') {
      console.log('airport')
      dataFilter = dataFilter.filter((travel) => travel.airportId === filters.airport.id )
    }
    console.log(dataFilter)
    
    if(filters && filters.budget > 0) {
      console.log('budget')
      dataFilter = dataFilter.filter((travel) => travel.budget <= filters.budget)
    }
    
    if(filters && filters.departureDate !== '') {
      console.log('departure')
      dataFilter = dataFilter.filter((travel) => new Date(travel.departure_date) === new Date(filters.departureDate))
    } 
    
    return dataFilter 
  }

  console.log(data)
  console.log(filters)
  const filterDestinations = () => {
    let dataFilter = data 

    if(activeCategory !== 'All') {
      dataFilter = dataFilter.filter((travel) => travel.destination.categories.some((category) => category.id == activeCategory))
    }

    return dataFilter
  }

  const showAll = () => {
    if(type === 'dashboard') {
      return (
        <Grid className='cardlist-container' container>
          {filterPublicTravel().map((item) => (
              <CardTravel type={type} data={item} key={item.id} />
          ))}
        </Grid>
      )
    } else if (type === 'destination') {
        return (
          <Grid className='cardlist-container' container>
            {filterDestinations().map((item) => (
                <CardDestination data={item} seeDestination={seeDestination} key={item.id} />
            ))}
          </Grid>
        )
    } else {
      return (
        <Grid className='cardlist-container' container>
          {data.map((item) => {
            if (type === 'travel' ) return <CardTravel type={type} data={item} key={item.id} />
          })}
        </Grid>
      )
    }
  }

  return (
    <>
    {showAll()}
    </>
  )
}


// props validations
CardList.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  activeCategory: PropTypes.string,
  filters: PropTypes.string,
  seeDestination: PropTypes.func,
}
export default CardList