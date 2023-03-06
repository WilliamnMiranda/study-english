import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import userServices from "../../services/User";
import * as C from "./style";
useQuery
const Login = () => {
  const mutationLogin = useMutation(
   ()=> userServices.login({email:"williamnmiranda@gmaill.com",password:"1243"}),
   {
    onError : ({ response })=>{
      console.log(response.data)
    }
   }
  )
  return (
    <C.Container>
      <C.ContainerLogin>
        <C.TextWelcome> Bem vindo de volta! 👋 </C.TextWelcome>
        <C.TittleLogin> Entre com sua conta </C.TittleLogin>
        <C.Field>
          <C.Label>Email</C.Label>
          <C.Input />
        </C.Field>
        <C.Field>
          <C.Label>Password</C.Label>
          <C.Input />
        </C.Field>

        <C.ButtonSubmit onClick={()=> mutationLogin.mutate()}>ENTRAR</C.ButtonSubmit>

        <C.RecoverPassword>Recuperar minha senha</C.RecoverPassword>
      </C.ContainerLogin>
      <C.CreateAccountLink>
        Não tem uma conta ? <span>Crie uma agora.</span>
      </C.CreateAccountLink>
    </C.Container>
  );
};

export default Login;
