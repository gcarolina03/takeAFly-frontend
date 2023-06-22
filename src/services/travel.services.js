import { api } from "./api";

export const CreateTravelAPI = async (budget, departure_date, return_date, airportId, visibility, destinationId) => {
  try {
    console.log(budget, departure_date, return_date, airportId, visibility, destinationId)
    const { data } = await api.post('/travels', {budget, departure_date, return_date, airportId, visibility, destinationId},  {
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

export const JoinTravelAPI = async (travelId) => {
  try {
    const { data } = await api.get(`/profile/travel/${travelId}/user`, {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot join to travel', error)
  }
}

export const RemoveTravelAPI = async (travelId) => {
  try {
    const { data } = await api.delete(`/profile/travel/${travelId}/user`, {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot remove from travel', error)
  }
}

export const DeleteTravelAPI = async (travelId) => {
  try {
    const { data } = await api.delete(`/profile/travel/${travelId}`, {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot delete travel', error)
  }
}