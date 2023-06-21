import { api } from "./api";

export const CreateTravelAPI = async (budget, departure_date, return_date, airportId, visibility) => {
  try {
    const { data } = await api.post('/travels', {budget, departure_date, return_date, airportId, visibility},  {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot create travel', error)
  }
}

export const GetTravelsAPI = async () => {
  try {
    const { data } = await api.get('/travels',  {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot get travels', error)
  }
}

export const GetTravelAPI = async (id) => {
  try {
    const { data } = await api.get(`/travels/${id}`,  {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot get travels', error)
  }
}

export const UpdateTravelDestinationAPI = async (travelId, destinationId) => {
  try {
    console.log(travelId, destinationId)
    const { data } = await api.put(`/profile/travel/${travelId}`, { destinationId },  {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot update travel', error)
  }
}