import { amadeus } from "./api"

export const ListFlightsAPI = async (origin, destination, departure, returnD) => {
  try {
    const { data } = await amadeus.get(`/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departure}&returnDate=${returnD}&adults=1&travelClass=ECONOMY&nonStop=false&currencyCode=EUR&max=10`, {
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN,
      }
    });
    console.log(data.data)
    return data
  } catch (error) {
    console.error('Cannot get fly', error)
  }
}