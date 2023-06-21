import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetTravelAPI } from '../../services/travel.services'

function TravelResume() {
  const { id } = useParams()
  const [travel, setTravel] = useState('')

  const getTravel = async () => {
    const res = await GetTravelAPI(id)
    setTravel(res)
  }

  console.log(travel)

  useEffect(() => {
    getTravel()
  }, [])

  return (
    <div>{travel.airport.code}</div>
  )
}

export default TravelResume