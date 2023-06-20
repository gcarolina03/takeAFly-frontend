import { api } from "./api";

export const CreateTravelAPI = async (budget, departure_date, return_date, airportId, visibility) => {
  try {
    const { data } = await api.post('/travels', {budget, departure_date, return_date, airportId, visibility},  {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data.message !== 'Success' && 'Error'
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