import { useEffect, useState } from 'react'
import { GetTravelAPI } from '../../services/travel.services'
import { Grid } from '@mui/material'
import CircularProgress from "@mui/material/CircularProgress";
import './TavelResume.css'

function TravelResume({id}) {
  const [travel, setTravel] = useState('')

  const getTravel = async () => {
    const res = await GetTravelAPI(id)
    setTravel(res)
  }

  console.log(travel)

  useEffect(() => {
    getTravel()
  }, [])


  const showData = () => {
    if(travel) {
      return (
        <Grid display="flex" flexDirection="column" justifyContent="center">
      <div>
        <h2>Travel Destination</h2> {travel.destination.city}
      </div>
      <div>
        <h2>Travel Date</h2> {travel.departure_date}
      </div>
      <div>
        <h2>Travel Return Date</h2> {travel.return_date}
      </div>
      <div>
        <h2>Budget:</h2> {travel.budget}€
      </div>
      <div></div>
    </Grid>
      )
    } else {

      <CircularProgress />;
    }
  }
  return (
    <>
    {showData()}
    </>
  );
}

export default TravelResume