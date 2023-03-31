import { api } from "../helpers/api";
import { UserLogin } from "./../interfaces/user_interfaces";
const userServices = {
	login: async (data: UserLogin) => {
		return await (
			await api.post("/access/login", data)
		).data;
	},
	auth: async (token: string) => {
		return await (
			await api.post("/access/auth", { token: token })
		).data;
	},
};

export default userServices;
