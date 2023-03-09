import styled from "styled-components";

interface ICurrent {
  currentCollection?: boolean;
}
export const ContainerProgress = styled.div`
  width: 100%;
  height: 11px;
  background-color: #293649;
`;

export const Progress = styled.div<ICurrent>`
  height: 11px;
  width: 45%;
  background-color:${({currentCollection})=> currentCollection ?' #00a4e2': '#1C5A81'};
`;
