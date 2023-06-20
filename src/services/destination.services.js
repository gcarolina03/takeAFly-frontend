import { api } from "./api";

export const GetDestinationAPI = async (id) => {
  try {
    const { data } = await api.get(`/destinations/${id}`, {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot get destination', error)
  }
}

export const GetAllDestinationsAPI = async () => {
  try {
    const { data } = await api.get(`/destinations`, {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot get destinations', error)
  }
}



