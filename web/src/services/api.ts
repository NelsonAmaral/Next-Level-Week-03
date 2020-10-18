import axios from 'axios';

const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_BACKEND_IP}:${process.env.REACT_APP_BACKEND_PORT}`,
})

export default api;