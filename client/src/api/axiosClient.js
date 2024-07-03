import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');//Cookieに変更予定
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        throw err.response;
    }
)

export default axiosClient;