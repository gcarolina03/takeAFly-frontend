import { Grid, Typography } from '@mui/material';
import { useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoriesButtonGroup from '../../components/CategoriesButtonGroup/CategoriesButtonGroup'
import { GetAllDestinationsAPI } from '../../services/destination.services';
import { CreateTravelAPI } from '../../services/travel.services';
import CardList from '../../components/CardList/CardList';
import TravelForm from '../../components/TravelForm/TravelForm';
import DestinationProfile from '../../components/DestinationProfile/DestinationProfile';


function CreateTravel() {
  const navigate = useNavigate()
  const [destinations, setDestinations] = useState('')
  const [destination, setDestination] = useState('')
  const [activeCategory, setActiveCategory] = useState('All');
  const [data, setData] = useState([])
  const [created, setCreated] = useState(false)
  const [showDestination, setShowDestination] = useState(false)

  const handleData = (res) => {
    setData(res)
  }

  console.log(data)

  const GetAllDestinations = async () => {
    const res = await GetAllDestinationsAPI()
    setDestinations(res)
  }

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const handleCreated = () => {
    setCreated(true);
  }

  useEffect(() => {
    GetAllDestinations()
  }, [])

  const createTravel = () => {
    CreateTravelService()
  }

  const seeDestination = (data) => {
    setShowDestination(true)
    setDestination(data)
  }

  const handleShowDestination = () => {
    return <DestinationProfile data={destination} hide={hideDestination} create={createTravel}/>
  }

  const hideDestination = () => {
    setShowDestination(false)
  }
  
  useEffect(() => {
    GetAllDestinations()
  }, [])

  // CREATE TRAVEL SERVICE
  const CreateTravelService = async () => {
    const res = await CreateTravelAPI(data.budget, data.departureDate, data.returnDate, data.airportId, data.visibility, destination.id)
    if (res !== 'error') {
      navigate(`/dashboard/travelCreated`)
    }
  }
  console.log(showDestination)
  return (
    <Grid sx={{position:'relative', }}>
      {(created && !showDestination) &&
      <>
        <Typography  textAlign='center' variant='h5' sx={{my:3, width:'100%' }}>Select a Destination</Typography>
        <CategoriesButtonGroup onCategorySelect={handleCategorySelect}/>
        {destinations.length > 0 && <CardList data={destinations} activeCategory={activeCategory} seeDestination={seeDestination} type='destination'/> }
      </>
      }
      {!created && <TravelForm handle={handleCreated} handleData={handleData} /> }
      {showDestination && handleShowDestination()}
    </Grid>
  );
}

export default CreateTravel