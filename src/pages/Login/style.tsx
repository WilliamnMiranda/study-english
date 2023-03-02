import styled from 'styled-components'
import backgroundImage from '../../assets/background.svg'
export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image:url(${backgroundImage});
  background-color: #F5F5F5;
  background-repeat: no-repeat;
  background-size: contain;
  background-position:bottom;
`

export const ContainerLogin = styled.section`
  width: 444px;
  height: 454px;
  background: #FFFFFF;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`