import axios from 'axios'

const api = axios.create({
  baseURL: 'https://grafenoih-back-1015246259201.europe-west1.run.app' || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
