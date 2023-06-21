import { api } from "./api"

export const ListAirportsAPI = async () => {
  try {
    const { data } = await api.get('/airport', {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    return data
  } catch (error) {
    console.error('Cannot get airports', error)
  }
}