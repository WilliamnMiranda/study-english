import { api } from "../helpers/api";
import { ICreateCollection } from "../interfaces/collections_interface";
import { UserLogin } from "./../interfaces/user_interfaces";
const collectionServices = {
	getAll: async () => {
		return await (
			await api.get("/collection")
		).data;
	},
	getOne: async (id: string) => {
		return await (
			await api.get(`/collection/${id}`)
		).data;
	},
	getInfo: async (id: string) => {
		return await (
			await api.get(`/collection/infos/${id}`)
		).data;
	},
	create: async (data: ICreateCollection) => {
		return await (
			await api.post("/collection", data)
		).data;
	},
};

export default collectionServices;
