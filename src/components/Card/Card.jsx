import { Grid} from '@mui/material'
import './Card.css'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'


function TravelCard({travel}) {
  const navigate = useNavigate()

  return (
    <Grid key={travel.id} className='travel' onClick={() => (navigate(`/travelProfile/${travel.id}`))}>
      <Grid className="travel-wrapper">
        {/* <Grid className="img-container">
          <img className="travel-img" src={character.image} />
        </Grid> */}
        <Grid className="content-text" sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <span className="travel-destination"> {travel.destination.city}</span>
          <span className="travel-info">{travel.departure_date} / {travel.return_date}</span>
          <span className="travel-info">Budget: {travel.budget} &euro;</span>
{/*             <Grid className='start' onClick={() => handleFavorites(character)}><i className={`${checkFav(character.id) ? 'fa-solid' : 'fa-regular'} fa-star`}></i></Grid>
*/}        </Grid>
      </Grid>
    </Grid>
  )
}

// props validations
TravelCard.propTypes = {
  travel: PropTypes.object,
}

export default TravelCard