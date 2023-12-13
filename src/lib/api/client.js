import axios from "axios";

const client = axios.create({
    baseURL: process.env.HTTP_SERVER
}); // axios 객체 생성
// client.defaults.url = process.env.MAIN_SERVER

client.interceptors.request.use(
    (config) => {
        const member = JSON.parse(localStorage.getItem('member'));
        const staff = JSON.parse(localStorage.getItem('staff'));

        if (member !== null) {
            config.headers['Accept'] = 'application/json';
            config.headers['Authorization'] = `Bearer ${member.accessToken}`;
        } else if (staff !==null) {
            config.headers['Accept'] = 'application/json';
            config.headers['Authorization'] = `Bearer ${staff.accessToken}`;
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

export default client;