import { api } from "../helpers/api";
import { ICreateCard } from "../interfaces/cards_interfaces";

const cardServices = {
	create: async (data: ICreateCard) => {
		return await (
			await api.post(`/card`, data)
		).data;
	},
	changed: async (idCard: string) => {
		return await await api.patch(`/card/${idCard}`);
	},
};

export default cardServices;
