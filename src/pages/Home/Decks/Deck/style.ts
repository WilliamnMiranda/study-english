import styled from "styled-components";

interface IPercentage {
	progress: number;
}
export const ContainerDeck = styled.div`
	padding: 20px 0px;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	border-bottom: 1px solid rgb(229, 229, 229);
`;
export const ContainerCompleted = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;
export const ContainerIconCompleted = styled.div`
	width: 25px;
	height: 25px;
	background-color: rgb(0, 166, 229);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		font-size: 0.9em;
		color: white;
		font-weight: bold;
	}
`;
export const PercentageCompleted = styled.div`
	color: rgb(0, 166, 229);
	font-weight: 600;
	font-size: 1.2em;
	font-family: "Poppins", sans-serif;
`;

export const ContainerName = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 80%;
`;
export const Name = styled.div`
	font-family: "Mulish", sans-serif;
	font-weight: bold;
	font-size: 1.2em;
	color: rgb(25, 125, 164);
`;

export const ContainerProgressPercentage = styled.div`
	width: 700px;
	height: 15px;
	background-color: rgb(213, 242, 253);
`;
export const ContainerPercentage = styled.div<IPercentage>`
	width: ${({ progress }) => progress + "%"};
	transition: all 2s;
	height: 15px;
	background-color: rgb(36, 168, 215);
`;
export const ContainerInfoNameAndCompletedTasks = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
export const TotalCompleteds = styled.div`
	font-size: 0.8em;
	color: rgb(177, 177, 177);
	font-family: "Mulish", sans-serif;
	font-weight: bold;
`;
export const ContainerOptions = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	font-size: 1.5em;
	color: rgb(121, 147, 166);
	svg {
		cursor: pointer;
	}
`;
