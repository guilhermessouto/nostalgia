import axios from 'axios'
import { Categories } from '../types/types'
import { parseCookies, setCookie } from 'nookies'

const baseURL = 'api.com/v1/'

const axiosInstance = axios.create({
  baseURL
})

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  setCookie(null, 'token', token)
}

axios.interceptors.request.use(config => {
  const token = parseCookies()

  if(token)
    config.headers['Authorization'] = `Bearer ${token}`

  return config

}, error => {
  return Promise.reject(error)
})

const getData = async <T>(endpoint: string) => {
  try {
    const res = await axiosInstance.get<T>(endpoint)
    return res.data
    
  } catch (error) {
    throw new Error('error')
  }
}

export const getCategories = () => getData<Categories>('categories')