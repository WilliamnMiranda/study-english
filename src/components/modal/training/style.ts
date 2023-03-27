import styled from "styled-components";

export const ContainerFront = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const ContainerResponseFront = styled.div`
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	font-size: 1.1em;
	font-family: "Poppins", sans-serif;
	font-weight: bold;
	padding: 10px 15px;
	p {
		position: relative;
		margin-top: 3px;
	}
`;

export const Label = styled.label`
	font-size: 1.1em;
	font-family: "Mulish", sans-serif;
`;
export const ContainerTraining = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
export const InputResponse = styled.input`
	height: 40px;
	padding: 0px 5px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	outline: none;
	font-size: 1.2em;
	font-family: "Mulish", sans-serif;
`;
export const ButtonSubmit = styled.button`
	background-color: rgb(36, 168, 215);
	outline: none;
	border: none;
	height: 50px;
	color: white;
	font-weight: 500;
	font-family: "Mulish", sans-serif;
	margin-top: 10px;
`;

export const ContainerButtonResult = styled.div`
	display: flex;
	gap: 10px;
`;
export const ButtonConfirm = styled(ButtonSubmit)`
	background-color: green;
	width: 50%;
`;
export const ButtonDecline = styled(ButtonSubmit)`
	background-color: red;
	width: 50%;
`;
