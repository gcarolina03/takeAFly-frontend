import { Grid, Typography} from '@mui/material'
import './CardDestination.css'
import PropTypes from 'prop-types'

function CardDestination({data, seeDestination}) {
  return (
    <Grid key={data.id} className='destination' onClick={() => seeDestination(data)}>
      <Grid className="destination-wrapper" sx={{flexDirection:'column'}}>
        <Grid className="destination-img-container" sx={{backgroundImage:`url(${data.imgUrl})`, backgroundPosition:'center', backgroundSize:'cover'}}>
        </Grid>
        <Grid className="content-text" sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Typography className="destination-name"> {data.city}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

// props validations
CardDestination.propTypes = {
  data: PropTypes.object,
  seeDestination: PropTypes.func,
}

export default CardDestination