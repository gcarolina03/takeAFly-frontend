import { Grid, Typography} from '@mui/material'
import './CardTravel.css'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

function CardTravel({data}) {

  function travelDone() {
    const today = new Date();
    const date = new Date(data.return_date)
    return (date < today)
  }
  
  const navigate = useNavigate()
  console.log(data)
  return (
    <Grid key={data.id} className='travel blackLayer' onClick={() => (navigate(`/travelProfile/${data.id}`))}>
      <Grid className="travel-wrapper" sx={{flexDirection:'column'}}>
        <Grid className={`img-container ${travelDone() && 'travel-done'}`} sx={{backgroundImage:`url(${data.destination.imgUrl})`, backgroundPosition:'center', backgroundSize:'cover'}}>
        </Grid>
        <Grid className="content-text" sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Typography className="travel-destination"> {data.destination.city}</Typography>
          <Typography className="travel-info">{data.departure_date} / {data.return_date}</Typography>
          <Typography className="travel-info">Budget: {data.budget} &euro;</Typography>
        </Grid>
        {travelDone() && <div className='completed'><CheckCircle /></div>}
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