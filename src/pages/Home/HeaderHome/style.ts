import styled from "styled-components";

export const ContainerHeaderInfo = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 70px 40px;
	height: 140px;
	font-family: "Mulish", sans-serif;
`;
export const LogoInfo = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 5em;
	height: 140px;
	width: 140px;
	background-color: thistle;
`;
export const ContainerInfos = styled.section`
	display: flex;
	gap: 30px;
`;
export const ContainerAllInfos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const ContainerGraphic = styled.section`
	height: 140px;
	display: flex;
	align-items: center;
`;
export const NameCollection = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	font-weight: bold;
	font-size: 2.5em;
	font-family: "Poppins", sans-serif;
	color: #34779b;
	text-transform: uppercase;
`;
export const TextOfCompletedAndIncompleteTasks = styled.p`
	color: #bbc2c8;
	font-weight: 500;
	font-size: 0.9em;
`;

export const TextBoldItem = styled.span`
	color: #3da4da;
	font-weight: bold;
`;
export const Icon = styled.img`
	width: 20px;
	height: 20px;
	cursor: pointer;
`;

export const ContainerOptionsInfos = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const ButtonStart = styled.button`
	background-color: #3da4da;
	width: 350px;
	border-radius: 30px;
	height: 40px;
	border: none;
	outline: none;
	color: white;
	letter-spacing: 2px;
	font-weight: 300;
	text-transform: uppercase;
	font-family: monospace;
	cursor: pointer;
`;
export const Share = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: #3da4da;
	font-weight: 500;
	font-size: 0.9em;
	cursor: pointer;
`;
export const MoreOptions = styled.div`
	display: flex;
	gap: 5px;
	cursor: pointer;
`;

export const MoreOptionIcon = styled.div`
	width: 7px;
	height: 7px;
	background-color: grey;
	border-radius: 50%;
`;
