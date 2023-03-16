import { api } from "../helpers/api";
const decksServices = {
	getAll: async (collection: string) => {
		console.log(collection);
		return await (
			await api.get(`/deck/${collection}`)
		).data;
	},
};

export default decksServices;
