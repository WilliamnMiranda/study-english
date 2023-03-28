import styled, { keyframes } from "styled-components";

const spinner = keyframes`
    0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
`;
export const ContainerLoading = styled.div`
	width: 100%;
	height: 100%;
`;
export const SpinnerLoading = styled.div`
	.loading-spinner {
		width: 520px;
		height: 520px;
		border: 10px solid #f3f3f3; /* Light grey */
		border-top: 10px solid #383636; /* Black */
		border-radius: 50%;
		animation: ${spinner} 1.5s linear infinite;
	}
`;
