let API_URL
let API_PORT
if (process.env.NODE_ENV === 'production') {
  API_PORT = JSON.stringify(process.env.API_PORT || '')
  API_URL = `${window.location.protocol}//${window.location.hostname}`
} else {
  API_PORT = JSON.stringify(process.env.API_PORT || `8081`)
  const API_HOST = `${window.location.protocol}//${window.location.hostname}`
  API_URL = `${API_HOST}:${process.env.API_PORT}/`
}
export default API_URL
