import { useEffect, useState } from 'react'
import { ListFlightsAPI } from '../services/fly.services'
import { Grid, Typography } from '@mui/material'

function Test() {
const [flights, setFlights] = useState([])
const [carriers, setCarriers] = useState([])

    const listFly = async () => {
      const res = await ListFlightsAPI('LPA', 'MAD', '2023-12-03', '2023-12-10') 
      setFlights(res.data)
      setCarriers(res.dictionaries.carriers)
    }

    console.log(carriers)

    useEffect(() => {
        listFly()
    }, [])

    console.log(flights)

  return (
    <div>
      {flights.length > 0 && (
        flights.map((flight) => (
          <Grid key={flight.id}>
            {flight.itineraries.map((itinerarie) => (
              <>
                <Typography>duracion: {itinerarie.duration}</Typography>
                <Typography>aerolinea: {carriers[itinerarie.segments[0].carrierCode]} - {carriers[itinerarie.segments[0].operating.carrierCode]}</Typography>
                <Typography>origen: {itinerarie.segments[0].departure.iataCode}</Typography>
                <Typography>origen salida hora: {itinerarie.segments[0].departure.at}</Typography>
                <Typography>destino{itinerarie.segments[0].arrival.iataCode}</Typography>
                <Typography>destino llegada hora:{itinerarie.segments[0].arrival.at}</Typography>
              </>
            ))}
            <Typography>total: {flight.price.total}</Typography>
          </Grid>
        ))
      )}
    </div>
  )
}

export default Test