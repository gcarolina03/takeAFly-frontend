import { api } from "./api";

export const SignUpAPI = async (username, email, password, birth_date) => {
  try {
    const { data } = await api.post('/auth/signup', { username, email, password, birth_date })
    localStorage.setItem('token', data.token)
    return data === 'exist' && 'error'
  } catch (error) {
    console.error('Cannot Sign up', error)
  }
}

export const CreateProfileAPI = async (first_name, last_name, address, description) => {
  try {
    const { data } = await api.put('/profile', { first_name, last_name, address, description }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return data === 'Unauthorized' && 'error'
  } catch (error) {
    console.error('Cannot Sign up', error)
  }
}

export const LoginAPI = async (email, password) => {
  try {
    console.log(email,password)
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('token', data.token)
    return data === 'incorrect' && 'error'
  } catch (error) {
    console.error('Cannot Sign up', error)
  }
}
