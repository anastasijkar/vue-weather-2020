import axios from 'axios'

const API_URL = 'https://api.openweathermap.org/data/2.5/'
const APPID = '89bf64420a722fa6304a5390561d28e9'

class Api {
  constructor () {
    this.getWeather = (location) => {
      return (location.lat && location.lon)
        ? axios.get(`${API_URL}weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${APPID}`)
        : axios.get(`${API_URL}weather?q=${location.name}&units=metric&appid=${APPID}`)
    }
    this.getDetails = location => axios.get(`${API_URL}onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,daily&units=metric&appid=${APPID}`)
  }
}

export const api = new Api()
