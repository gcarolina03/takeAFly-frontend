import { api } from "./api";

export const GetCategoriesAPI = async () => {
  try {
    const { data } = await api.get('/categories', {
        headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error('Cannot Sign up', error)
  }
}

