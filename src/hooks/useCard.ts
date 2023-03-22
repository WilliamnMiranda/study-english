import { ICreateCard } from "../interfaces/cards_interfaces";
import cardServices from "../services/Cards";

const useDeck = () => {
	const createCard = async (data: ICreateCard) => {
		const a = await cardServices.create(data);
		console.log(a);
	};

	return {
		createCard,
	};
};

export default useDeck;
