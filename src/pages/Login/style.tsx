import styled from "styled-components";
import backgroundImage from "../../assets/background.svg";
import backgroundImageMobile from "../../assets/background_mobile.svg";
export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

  @media(max-width : 800px){
    background-size: cover;
    background-position: top bottom;
    background-image: url(${backgroundImageMobile});
  }
`;

export const ContainerLogin = styled.section`
  width: 444px;
  background: #ffffff;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 40px 50px;
  color: #333333;

  @media(max-width : 800px){
    width: 85%;
  }
`;
export const TextWelcome = styled.span`
  font-size: 0.8em;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  margin-bottom: 10px;
`;

export const TittleLogin = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.2em;
  color: #333333;
  font-weight: 500;
  margin-top: 2px;
  margin-bottom: 10px;
`;
export const Field = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 10px;
`;
export const Label = styled.label``;
export const Input = styled.input`
  width: 100%;
  height: 30px;
`;

export const ButtonSubmit = styled.button`
  margin-top: 20px;
  padding: 9px 14px;
  width: 100%;
  outline: none;
  border: none;
  height: 45px;
  top: 424px;
  background: linear-gradient(180deg, #625bf7 0%, #463eea 100%);
  border-radius: 6px;
  color: white;
  font-weight: bold;
`;

export const RecoverPassword = styled.p`
  font-family: "Mulish";
  font-size: 0.8em;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  color: #625bf7;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;
export const CreateAccountLink = styled.div`
  font-size: 1em;
  font-style: normal;
  font-family: "Mulish";
  margin-top: 15px;
  font-weight: 400;
  cursor: pointer;
  span {
    color: #625bf7;
  }
`;
