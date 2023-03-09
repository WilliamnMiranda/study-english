import styled, { css } from "styled-components";

interface IActive {
  activeCollection: boolean;
}
export const ContainerCollection = styled.div<IActive>`
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
  ${({ activeCollection }) =>
    activeCollection &&
    css`
      ::before {
        content: "";
        position: absolute;
        left: 0;
        width: 7px;
        height: 45px;
        background-color: red;
        transition: .1s;
      }
    `};
`;
export const ImageCollection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  font-family: "Mulish", sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  background-color: rgba(213, 145, 176, 0.8);
`;
export const ContainerInfosCollection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 75%;
`;
export const TittleCollection = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.7em;
  font-weight: bold;
  display: flex;
  gap: 5px;
  align-items: center;
  text-transform: uppercase;
`;
export const ContainerProgress = styled.div`
  width: 100%;
  background-color: white;
`;

export const IconVerify = styled.div`
  width: 10px;
  height: 10px;
  background-color: greenyellow;
  border-radius: 50%;
`;
