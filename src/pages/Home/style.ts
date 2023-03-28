import styled from "styled-components";

export const ContainerEmpty = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	img {
		width: 300px;
		height: 300px;
	}
	p {
		font-size: 1.5em;
		font-weight: 500;
		position: relative;
		left: 3%;
		font-family: "Poppins", sans-serif;
	}
	button {
		width: 200px;
		height: 40px;
		outline: none;
		border: none;
		position: relative;
		left: 3%;
		background-color: rgb(108, 99, 255);
		color: white;
		font-weight: 500;
		font-family: "Mulish", sans-serif;
		text-transform: uppercase;
		cursor: pointer;
	}
`;

export const ContainerLoading = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
