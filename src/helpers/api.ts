import axios from 'axios'

export const api = (url?: string) => {
  return axios.create({
    baseURL: url || window.location.origin,
    withCredentials: true,
  })
}
