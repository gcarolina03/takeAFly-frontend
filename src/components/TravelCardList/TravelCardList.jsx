import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'
import TravelCard from '../TravelCard/TravelCard'
import './TravelCardList.css'
import { Grid } from '@mui/material';

function TravelCardList({ travels }) {
 const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 960 });

  const getGridColumns = () => {
    if (isDesktop) {
      return 5; 
    } else if (isTablet) {
      return 4;
    } else {
      return 2; 
    }
  };

  const gridColumns = getGridColumns();
  const numTravels = gridColumns * 2;
  const selectedTravels = travels.slice(0, numTravels);

  return (

      <Grid container spacing={1} >
      {selectedTravels.map((travel) => (
        <Grid sx={{display: 'flex', flexDirection:'row', justifyContent: 'center'}}  item xs={12} sm={6} md={4} lg={3} xl={3} key={travel.travelId}>
        <TravelCard
        key={travel.travelId}
        title={travel.title}
        imageUrl={travel.imageUrl}
        dates={travel.dates}
        budget={travel.budget}
        travelId={travel.travelId}/>
        </Grid>
      ))}
      </Grid>

  )
}

// props validations
TravelCardList.propTypes = {
  travels: PropTypes.object,
}

export default TravelCardList