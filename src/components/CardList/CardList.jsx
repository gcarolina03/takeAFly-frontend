import PropTypes from 'prop-types'
import CardTravel from '../CardTravel/CardTravel'
import CardDestination from '../CardDestination/CardDestination';
import './CardList.css'
import { Grid } from '@mui/material';

function CardList({ data, type, travel, activeCategory }) {
  const filterPublicTravel = (arr) => {
    return arr.filter((travel) => travel.destination.categories.some((category) => category.id == activeCategory))
  }

  const filterDestinations = (arr) => {
    return arr.filter((destination) => destination.categories.some((category) => category.id == activeCategory))
  }

  const showAll = () => {
    if(type === 'dashboard') {
      if(activeCategory === 'All') {
        return (
          <Grid className='cardlist-container' container>
            {data.map((item) => (
              <CardTravel type={type} data={item} key={item.id} />
            ))}
          </Grid>
        )
      } else {
        return (
          <Grid className='cardlist-container' container>
            {filterPublicTravel(data).map((item) => (
                <CardTravel type={type} data={item} key={item.id} />
            ))}
          </Grid>
        )
        
      }
    } else if (type === 'destination') {
      if(activeCategory === 'All') {
        return (
          <Grid className='cardlist-container' container>
            {data.map((item) => (
              <CardDestination data={item} travel={travel} key={item.id} />
            ))}
          </Grid>
        )
      } else {
        return (
          <Grid className='cardlist-container' container>
            {filterDestinations(data).map((item) => (
                <CardDestination data={item} travel={travel} key={item.id} />
            ))}
          </Grid>
        )
      }
    } else {
      return (
        <Grid className='cardlist-container' container>
          {data.map((item) => {
            if (type === 'travel' ) return <CardTravel type={type} data={item} key={item.id} />
            if (type === 'destination') return <CardDestination data={item} travel={travel} key={item.id} />
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
  travel: PropTypes.number,
  activeCategory: PropTypes.string,
}

export default CardList