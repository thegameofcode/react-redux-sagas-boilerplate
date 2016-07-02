import axios from 'axios'

const OWM_API_KEY = 'cce420b78c35e958844f8e4cd0048d56'

export default function (city) {
  const url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${OWM_API_KEY}`
  return axios.get(url)
}
