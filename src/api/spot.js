import axios from "axios";
import { BASE_URL, SPOT_ENDPOINT } from "./config";

export async function getSpots(params) {
  const res = await axios.get(`${BASE_URL}/${SPOT_ENDPOINT}`, {
    params: params,
  });
  return res;
}

export async function addSpot(data) {
  const res = await axios.post(`${BASE_URL}/${SPOT_ENDPOINT}`, data);
  return res;
}
