import { useEffect, useState } from 'react'
import { ListAirportsAPI } from '../services/airport.services'
import { Typography } from '@mui/material'

function Test() {
const [airports, setAirports] = useState([])

    const ListAirports = async () => {
        const res = await ListAirportsAPI() 
        setAirports(res)
    }

    useEffect(() => {
        ListAirports()
    }, [])

    console.log(airports)

  return (
    <div>
      {airports.length > 0 && (
        airports.map((airport) => (
          <Typography key={airport.iata_code}>{airport.name}</Typography>
        ))
      )}
    </div>
  )
}

export default Test