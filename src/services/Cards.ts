import { api } from "../helpers/api";
import { ICreateCard } from "../interfaces/cards_interfaces";

const cardServices = {
	create: async (data: ICreateCard) => {
		return await (
			await api.post(`/card`, data)
		).data;
	},
};

export default cardServices;
