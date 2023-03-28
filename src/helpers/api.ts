import axios from "axios";
export const api = axios.create({
	baseURL: "https://api-study-kappa.vercel.app",
});

api.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem("english-token");
		if (token) {
			config.headers!["x-access-token"] = token;
		}
		return config;
	},
	(error) => {
		return Promise.reject("aaaaaaaaaaaaaaaaab");
	},
);
