import { Grid} from '@mui/material'
import './CardDestination.css'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'


function CardDestination({data, travel}) {
  const navigate = useNavigate()
  return (
    <Grid key={data.id} className='destination' onClick={() => (navigate(`/destinationProfile/${data.id}/${travel}`))}>
      <Grid className="destination-wrapper" sx={{flexDirection:'column'}}>
        <Grid className="destination-img-container" sx={{backgroundImage:`url(${data.imgUrl})`, backgroundPosition:'center', backgroundSize:'cover'}}>
        </Grid>
        <Grid className="content-text" sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <span className="destination-name"> {data.city}</span>
        </Grid>
      </Grid>
    </Grid>
  )
}

// props validations
CardDestination.propTypes = {
  data: PropTypes.object,
  travel: PropTypes.number
}

export default CardDestination