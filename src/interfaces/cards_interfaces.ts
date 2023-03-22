export interface ICard {
	code: string;
	user: string;
	front: string;
	back: string;
	isComplete: boolean;
	deck: string;
	_id: string;
}

export interface ICreateCard {
	front: string;
	back: string;
	deck: string;
}
