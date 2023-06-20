import PropTypes from 'prop-types'
import CardTravel from '../CardTravel/CardTravel'
import CardDestination from '../CardDestination/CardDestination';
import './CardList.css'
import { Grid } from '@mui/material';

function CardList({ data, type, travel }) {
  console.log(data)
  return (
    <Grid className='cardlist-container' container>
      {data.map((item) => {
        if (type === 'travel' || type === 'dashboard' ) return <CardTravel type={type} data={item} key={item.id} />
        if (type === 'destination') return <CardDestination data={item} travel={travel} key={item.id} />
      })}
    </Grid>
    )
}

// props validations
CardList.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  travel: PropTypes.number
}

export default CardList