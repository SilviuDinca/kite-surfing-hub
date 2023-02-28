import axios from "axios";
import { BASE_URL, LOGIN_ENDPOINT } from "./config";


export async function signIn(username, password) {
  const res = await axios.post(`${BASE_URL}/${LOGIN_ENDPOINT}`, {
    username: username,
    password: password,
  })
  return res
}

