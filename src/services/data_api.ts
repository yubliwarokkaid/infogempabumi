import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const ROOT_API_WEATHER = "https://weather-api-tau-six.vercel.app";

export async function getEarthquake() {
  const response = await axios.get(`${ROOT_API}/autogempa.json`);
  const axiosResponse = response.data;

  return axiosResponse.Infogempa;
}

export async function getEarthquakeLatest() {
  const response = await axios.get(`${ROOT_API}/gempaterkini.json`);
  const axiosResponse = response.data;

  return axiosResponse.Infogempa;
}

export async function getEarthquakeFelt() {
  const response = await axios.get(`${ROOT_API}/gempadirasakan.json`);
  const axiosResponse = response.data;

  return axiosResponse.Infogempa;
}

export async function getWeatherArea() {
  const response = await axios.get(
    "https://cuaca-gempa-rest-api.vercel.app/weather/indonesia",
  );
  const axiosResponse = response.data;

  return axiosResponse.data.areas;
}

export async function getWeatherAreaParams() {
  const response = await axios.get(
    `https://cuaca-gempa-rest-api.vercel.app/weather/indonesia`,
  );
  const axiosResponse = response.data;

  return axiosResponse.data.areas;
}
