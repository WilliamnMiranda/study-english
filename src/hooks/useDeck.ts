import { useQueryClient } from "@tanstack/react-query";
import { ICard } from "../interfaces/cards_interfaces";
import { IDecks } from "../interfaces/decks_interfaces";
import decksServices from "../services/Decks";

const useDeck = () => {
	const NumberOfCompletedcards = 0;
	const queryClient = useQueryClient();
	const verifyCompletedCards = (deck: IDecks) => {
		const numberCompletedCards = deck.cards.reduce(
			(accumulator, card: ICard) => {
				if (card.isComplete) return accumulator + 1;
				return accumulator;
			},
			0,
		);
		const totalCards = deck.cards.length;
		return {
			numberCompletedCards,
			totalCards,
		};
	};

	const createDeck = async (name: string, id: string) => {
		const a = await decksServices.create({ name, id });
		queryClient.invalidateQueries(["decks"]);
	};

	return {
		verifyCompletedCards,
		createDeck,
	};
};

export default useDeck;
