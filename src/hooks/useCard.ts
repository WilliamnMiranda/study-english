import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ModalContext } from "../contexts/Modal_Context";
import { ICreateCard } from "../interfaces/cards_interfaces";
import cardServices from "../services/Cards";

const useDeck = () => {
	const queryClient = useQueryClient();
	const { setTypeModal } = useContext(ModalContext);
	const mutate = useMutation((data: ICreateCard) => cardServices.create(data), {
		onSuccess: (data) => {
			toast.success("Card criado com sucesso");
			queryClient.invalidateQueries(["decks"]);
			setTypeModal(null, "close");
		},
	});

	const createCard = async (data: ICreateCard) => mutate.mutate(data);

	return {
		createCard,
	};
};

export default useDeck;
