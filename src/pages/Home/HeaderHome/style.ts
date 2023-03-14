import styled from "styled-components";

export const ContainerHeaderInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  height: 120px;
`;
export const LogoInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.0em;
  height: 120px;
  width: 120px;
  background-color: chartreuse;
`;
export const ContainerInfos = styled.section`
  display: flex;
  gap:30px;
`;
export const ContainerAllInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContainerGraphic = styled.section``;
export const NameCollection = styled.div`
  font-weight: bold;
  font-size: 2.5em;
  font-family: "Poppins", sans-serif;
  color: #34779b;
  text-transform: uppercase;
`;
export const TextOfCompletedAndIncompleteTasks = styled.p``;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ContainerOptionsInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonStart = styled.button`
  background-color: #3da4da;
  width: 350px;
  border-radius: 30px;
  height: 40px;
  border: none;
  outline: none;
  color: white;
  letter-spacing: 5px;
  font-weight: 300;
  text-transform: uppercase;
  font-family: monospace;
`;
export const Share = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const MoreOptions = styled.div`
  display: flex;
  gap: 5px;
`;

export const MoreOptionIcon = styled.div`
  width: 7px;
  height: 7px;
  background-color: grey;
  border-radius: 50%;
`;
