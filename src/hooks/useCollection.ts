import { CollectionContext } from "./../contexts/Collection_Context";
import { useContext } from "react";
import { ICollection } from "../interfaces/collections_interface";
import { IDecks } from "../interfaces/decks_interfaces";
import { ICard } from "../interfaces/cards_interfaces";
const useCollection = () => {
	const { activeCollection, setActiveCollection } =
		useContext(CollectionContext);

	const changeCollection = (_id: string) => {
		if (_id === activeCollection) return;
		setActiveCollection(_id);
	};

	const verifyCompletedCollections = (collection: ICollection) => {
		let totalCardsCompleted = 0;
		let totalCards = 0;
		if (collection.decks) {
			collection.decks.forEach((deck: IDecks) => {
				if (deck.cards.length > 0) {
					totalCards = deck.cards.length;
					deck.cards.forEach((card: ICard) => {
						if (card.isComplete) return (totalCardsCompleted += 1);
					});
				}
			});
		}

		return {
			totalCardsCompleted,
			totalCards,
		};
	};
	return {
		activeCollection,
		changeCollection,
		verifyCompletedCollections,
	};
};

export default useCollection;
