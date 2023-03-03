import axios from "axios";
export const api = axios.create({
	baseURL: "http://localhost:8081",
});

api.interceptors.request.use(
	async (config) => {
		const  token  = localStorage.getItem('english-token');
		if (token) {
			config.headers!["x-access-token"] = token;
		}
		return config;
	},
	(error) => {
		return Promise.reject("aaaaaaaaaaaaaaaaab");
	},
);
