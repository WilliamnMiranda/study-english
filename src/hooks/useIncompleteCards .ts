import { ICard } from "../interfaces/cards_interfaces";
import { useEffect, useState } from "react";
import decksServices from "../services/Decks";
import cardsServices from "../services/Cards";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useReviewDecks = (id: string) => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["incompletedcards"],
		queryFn: () => decksServices.getAllIncompletedCards(id),
	});

	const queryClient = useQueryClient();
	const [currentItem, setCurrentItem] = useState<ICard>();
	const [wrongLetters, setWrongLetters] = useState<ICard[] | null>(null);
	const [activeResult, setActiveResult] = useState(false);
	const [value, setValue] = useState("");

	const mutateDeck = useMutation(() => cardsServices.changed(data[0]._id), {
		onSuccess: (data) => {
			queryClient.invalidateQueries(["collections"]);
			queryClient.invalidateQueries(["decks"]);
			toast.success("Colecao criada com sucesso");
			setActiveResult(false);
			refetch();
			setValue("");
		},
	});

	const showResult = () => setActiveResult(true);

	const changeCard = () => mutateDeck.mutate();

	useEffect(() => {
		if (!isLoading) {
			data.sort();
			setCurrentItem(data[0]);
		}
	}, [data]);

	return {
		data,
		isLoading,
		currentItem,
		wrongLetters,
		changeCard,
		activeResult,
		showResult,
		value,
		setValue,
	};
};

export default useReviewDecks;
