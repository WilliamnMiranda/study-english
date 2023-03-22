import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICreateCard } from "../interfaces/cards_interfaces";
import cardServices from "../services/Cards";

const useDeck = () => {
	const queryClient = useQueryClient();
	const mutate = useMutation((data: ICreateCard) => cardServices.create(data), {
		onSuccess: (data) => {
			queryClient.invalidateQueries(["decks"]);
			console.log(data);
		},
		onError: ({ response }) => {
			console.log(response.data);
		},
	});

	const createCard = async (data: ICreateCard) => mutate.mutate(data);

	return {
		createCard,
	};
};

export default useDeck;
