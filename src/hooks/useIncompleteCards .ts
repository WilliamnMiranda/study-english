import { ICard } from "../interfaces/cards_interfaces";
import { useEffect, useState } from "react";
import decksServices from "../services/Decks";
import cardsServices from "../services/Cards";
import { useMutation, useQuery } from "@tanstack/react-query";

const useReviewDecks = (id: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ["incompletedcards"],
		queryFn: () => decksServices.getAllIncompletedCards(id),
	});

	const [currentItem, setCurrentItem] = useState<ICard>();
	const [wrongLetters, setWrongLetters] = useState<ICard[] | null>(null);
	const [activeResult, setActiveResult] = useState(false);

	const mutateDeck = useMutation(() => cardsServices.changed(data[0]._id));

	const showResult = () => {
		setActiveResult(true);
	};
	const changeCard = () => {
		mutateDeck.mutate();
	};

	useEffect(() => {
		if (!isLoading) {
			data.sort();
			setCurrentItem(data[0]);
		}
	}, [data]);

	const accept = (card: ICard) => {};

	return {
		//takeIncompleteCardsFromTheDeck,
		data,
		isLoading,
		currentItem,
		wrongLetters,
		changeCard,
		activeResult,
		showResult,
	};
};

export default useReviewDecks;
