import { CollectionContext } from "./../contexts/Collection_Context";
import { useContext, useState } from "react";
import {
	ICollection,
	ICreateCollection,
} from "../interfaces/collections_interface";
import { IDecks } from "../interfaces/decks_interfaces";
import { ICard } from "../interfaces/cards_interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import collectionServices from "../services/Collection";
import { ModalContext } from "../contexts/Modal_Context";
const useCollection = () => {
	const { activeCollection, setActiveCollection } =
		useContext(CollectionContext);
	const { setTypeModal } = useContext(ModalContext);
	const [error, setError] = useState("");
	const queryClient = useQueryClient();
	const changeCollection = (_id: string) => {
		if (_id === activeCollection) return;
		setActiveCollection(_id);
	};

	const mutate = useMutation(
		(data: ICreateCollection) => collectionServices.create(data),
		{
			onSuccess: (data) => {
				setTypeModal(null, "close");
				queryClient.invalidateQueries(["collections"]);
			},
			onError: ({ response }) => {
				console.log(response.data);
			},
		},
	);

	const createCollection = (data: ICreateCollection) => {
		const { abbreviation } = data;
		console.log(data);
		if (abbreviation.length !== 3)
			setError("Voce precisa digitar ate 3 letras na sigla");
		else {
			mutate.mutate(data);
		}
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
		error,
		createCollection,
	};
};

export default useCollection;
