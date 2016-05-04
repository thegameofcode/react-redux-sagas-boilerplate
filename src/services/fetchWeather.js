import axios from 'axios'

const OWM_API_KEY = 'ade3d0b327a82b737a59c5ae19a00a14'

export default function (city) {
	let url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${OWM_API_KEY}`
	return axios.get(url)
}
