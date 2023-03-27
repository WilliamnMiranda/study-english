import { api } from "../helpers/api";

interface IDataCreateDeck {
	name: string;
	id: string;
}
const decksServices = {
	getAll: async (collection: string) => {
		console.log(collection);
		return await (
			await api.get(`/deck/${collection}`)
		).data;
	},
	create: async (data: IDataCreateDeck) => {
		return await (
			await api.post(`/deck/${data.id}`, data)
		).data;
	},
	getAllIncompletedCards: async (deckId: string) => {
		return await (
			await api.get(`/deck/getincompletedscards/${deckId}`)
		).data;
	},
};

export default decksServices;
