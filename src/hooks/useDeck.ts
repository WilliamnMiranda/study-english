import { ICard } from "../interfaces/cards_interfaces";
import { IDecks } from "../interfaces/decks_interfaces";

const useDeck = () => {
	const NumberOfCompletedcards = 0;

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

	return {
		verifyCompletedCards,
	};
};

export default useDeck;
