import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './CardList.css'
import { Grid } from '@mui/material';

function CardList({ travels }) {
  return (
    <Grid className='cardlist-container' item xs={12} sm={6} md={4} lg={3} xl={3}>
      {travels.map((travel) => (
        <Card travel={travel} key={travel.id} />
      ))}
    </Grid>
    )
}

// props validations
CardList.propTypes = {
  travels: PropTypes.object,
}

export default CardList