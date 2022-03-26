import axios from 'axios'

export const api = (url?: string) => {
  return axios.create({
    baseURL: url || '//localhost:3001',
    withCredentials: true,
  })
}
