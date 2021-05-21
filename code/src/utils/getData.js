import axios from "axios";
import { API_KEY, API_URL } from "./settings";

export default async function getData(q) {
  const res = await axios.get(`${API_URL}/${API_KEY}query=${q}`);
  if (res.data.current) {
    const data = {
      country: res.data.location.country,
      name: res.data.location.name,
      temperature: res.data.current.temperature,
      humidity: res.data.current.humidity,
      precip: res.data.current.precip,
      wind_dir: res.data.current.wind_dir,
      wind_speed: res.data.current.wind_speed,
    };
    return data;
  } else {
    return null;
  }
}
