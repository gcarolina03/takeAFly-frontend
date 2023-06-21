import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000
})

export const amadeus = axios.create({
  baseURL: import.meta.env.VITE_AMADEUS_API_URL,
  timeout: 5000
})