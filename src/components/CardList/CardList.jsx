import PropTypes from 'prop-types'
import CardTravel from '../CardTravel/CardTravel'
import CardDestination from '../CardDestination/CardDestination';
import './CardList.css'
import { Grid } from '@mui/material';

function CardList({ data, type, travel, activeCategory }) {
  console.log(data)
  
  const showAll = () => {
    if(type === 'dashboard') {
      if(activeCategory === 'All') {
        return (
          <Grid className='cardlist-container' container>
            {data.map((item) => {
              <CardTravel type={type} data={item} key={item.id} />
            })}
          </Grid>
        )
      } else {
        <Grid className='cardlist-container' container>
          {data
            .filter((travel) =>  travel.category === activeCategory )
            .map((item) => {
              <CardTravel type={type} data={item} key={item.id} />
          })}
        </Grid>
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