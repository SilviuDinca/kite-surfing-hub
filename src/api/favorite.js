import axios from "axios";
import { BASE_URL, FAVORITE_ENDPOINT } from "./config";

export async function getFavorites() {
  const res = await axios.get(`${BASE_URL}/${FAVORITE_ENDPOINT}`);
  return res;
}

export async function addFavorite(data) {
  const res = await axios.post(`${BASE_URL}/${FAVORITE_ENDPOINT}`, data);
  return res;
}

export async function deleteFavorite(id) {
  const res = await axios.delete(`${BASE_URL}/${FAVORITE_ENDPOINT}/${id}`);
  return res;
}
