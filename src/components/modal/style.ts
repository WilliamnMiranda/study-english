import styled from "styled-components";

export const ContainerModal = styled.section`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Modal = styled.section`
	width: 600px;
	background-color: white;
	padding: 30px 20px;
	border-radius: 10px;
`;
export const TittleModal = styled.h2`
	font-weight: bold;
	font-family: "Mulish", sans-serif;
	font-size: 1.2em;
	text-transform: uppercase;
`;
export const HeaderModal = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0px;
	margin-bottom: 20px;
	svg {
		font-size: 1.4em;
		font-weight: bold;
		cursor: pointer;
	}
`;
