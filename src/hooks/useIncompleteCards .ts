import { ICard } from "../interfaces/cards_interfaces";
import { useEffect, useRef, useState } from "react";
import decksServices from "../services/Decks";
import cardsServices from "../services/Cards";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useReviewDecks = (id: string) => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["incompletedcards"],
		queryFn: () => decksServices.getAllIncompletedCards(id),
	});
	const lastNumberRandom = useRef<number>();
	const queryClient = useQueryClient();
	const [currentItem, setCurrentItem] = useState<ICard>();
	const [wrongLetters, setWrongLetters] = useState<ICard[] | null>(null);
	const [activeResult, setActiveResult] = useState(false);
	const [value, setValue] = useState("");

	const { mutate, isLoading: loadingMutation } = useMutation(
		() => cardsServices.changed(data[0]._id),
		{
			onSuccess: (data) => {
				queryClient.invalidateQueries(["collections"]);
				queryClient.invalidateQueries(["decks"]);
				toast.success("Colecao criada com sucesso");
				setActiveResult(false);
				refetch();
				setValue("");
			},
		},
	);
	const generateRandomIndex = () => {
		if (data.length === 0) return;

		const number = Math.floor(Math.random() * data.length);
		if (data.length == 1) {
			setActiveResult(false);
			setValue("");
			setCurrentItem(data[0]);
			return;
		}

		lastNumberRandom.current == number && generateRandomIndex();

		lastNumberRandom.current = number;
		setActiveResult(false);
		setValue("");
		setCurrentItem(data[number]);
	};

	const declineCard = () => generateRandomIndex();

	const showResult = () => setActiveResult(true);

	const changeCard = () => mutate();

	useEffect(() => {
		if (!isLoading) generateRandomIndex();
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
		declineCard,
		loadingMutation,
	};
};

export default useReviewDecks;
