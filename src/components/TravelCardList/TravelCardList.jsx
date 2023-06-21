import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'
import TravelCard from '../TravelCard/TravelCard'
import './TravelCardList.css'
import { Grid } from '@mui/material';

function TravelCardList({ travels, activeCategory }) {

  console.log(activeCategory)
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

  const showAll = () => {
    if(activeCategory === 'All') {
      return (

        <Grid container spacing={1} >
        {selectedTravels.map((travel) => (
          <Grid sx={{display: 'flex', flexDirection:'row', justifyContent: 'center', marginTop:'20px'}}  item xs={12} sm={6} md={4} lg={3} xl={3} key={travel.travelId}>
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
    } else {
      return (
        <Grid container spacing={1}>
          {selectedTravels
            .filter((travel) => travel.category === activeCategory)
            .filter((travel) => {
              if (
                filterValue.originAirport &&
                travel.originAirport !== filterValue.originAirport
              ) {
                return false;
              }
              if (
                filterValue.departureDate &&
                travel.departureDate !== filterValue.departureDate
              ) {
                return false;
              }
              if (filterValue.budget && travel.budget !== filterValue.budget) {
                return false;
              }
              return true;
            })
            .map((travel) => (
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                key={travel.travelId}
              >
                <TravelCard
                  key={travel.travelId}
                  title={travel.title}
                  imageUrl={travel.imageUrl}
                  dates={travel.dates}
                  budget={travel.budget}
                  travelId={travel.travelId}
                />
              </Grid>
            ))}
        </Grid>
      );
    }
  }
  return (
    <>
    {showAll()}
    </>
  )
}

// props validations
TravelCardList.propTypes = {
  travels: PropTypes.arrayOf(
    PropTypes.shape({
      travelId: PropTypes.number,
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      dates: PropTypes.string,
      budget: PropTypes.string,
    })
  ),
  activeCategory: PropTypes.string,
};

export default TravelCardList