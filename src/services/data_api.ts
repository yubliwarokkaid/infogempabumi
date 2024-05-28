import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;

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
