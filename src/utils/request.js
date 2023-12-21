import axios from "axios";
import {useSelector} from "react-redux";
import useAxios, {configure} from 'axios-hooks'

const refreshAccessToken = async () => Math.random().toString(36);
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: import.meta.env.VITE_APP_API_BASE_URL, // 超时
    timeout: 30000, // 禁用 Cookie 等信息
    withCredentials: false,
})
service.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

// response interceptor intercepting 401 responses, refreshing token and retrying the request
service.interceptors.response.use(
    (response) => response,
    async (error) => {
        const config = error.config;
        if (error.code === "ERR_CANCELED") {
            // aborted in useEffect cleanup
            return Promise.resolve({status: 499})
        }
        if (error?.response?.status === 401 && !config._retry) {
            // we use this flag to avoid retrying indefinitely if
            // getting a refresh token fails for any reason
            config._retry = true;
            localStorage.setItem("token", await refreshAccessToken());
            return axios(config);
        }

        return Promise.reject(error);
    }
);
configure({axios: service})


