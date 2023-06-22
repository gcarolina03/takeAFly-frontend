import { api } from "./api";

export const GetProfileAPI = async () => {
  try {
    const { data } = await api.get('/profile',  {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot get profile', error)
  }
}

export const GetMyTravelsAPI = async () => {
  try {
    const { data } = await api.get('/profile/travels',  {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot get my travels', error)
  }
}

export const UpdateProfileAPI = async (obj) => {
  try {
    console.log('api:'+obj)
    const { data } = await api.put('/profile/', obj,  {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot update profile', error)
  }
}