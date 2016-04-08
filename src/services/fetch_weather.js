import axios from 'axios';

const OWM_API_KEY = 'ade3d0b327a82b737a59c5ae19a00a14';
const OWM_API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OWM_API_KEY}&mode=json`;

export default function (city) {
	const url = `${OWM_API_URL}&q=${city},us`;
	return axios.get(url);
}