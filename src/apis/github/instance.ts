import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com',
})

// Add a request interceptor
instance.interceptors.request.use(request => {
  console.log('Starting request', `${request.baseURL}${request.url}`);
  return request
}, error => {
  console.log('Request error', error.message)
})

// Add a response interceptor
instance.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('Response error', error.message)
})

export default instance
