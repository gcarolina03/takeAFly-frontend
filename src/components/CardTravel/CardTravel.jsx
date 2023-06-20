import { Grid} from '@mui/material'
import './CardTravel.css'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'


function CardTravel({data}) {
  const navigate = useNavigate()
  console.log(data)
  return (
    <Grid key={data.id} className='travel' onClick={() => (navigate(`/travelProfile/${data.id}`))}>
      <Grid className="travel-wrapper" sx={{flexDirection:'column'}}>
        <Grid className="img-container" sx={{backgroundImage:`url(${data.destination.imgUrl})`, backgroundPosition:'center', backgroundSize:'cover'}}>
        </Grid>
        <Grid className="content-text" sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <span className="travel-destination"> {data.destination.city}</span>
          <span className="travel-info">{data.departure_date} / {data.return_date}</span>
          <span className="travel-info">Budget: {data.budget} &euro;</span>
        </Grid>
      </Grid>
    </Grid>
  )
}

// props validations
CardTravel.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
}

export default CardTravel