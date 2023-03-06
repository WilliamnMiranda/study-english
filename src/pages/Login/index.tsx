import React, { useRef } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import userServices from "../../services/User";
import * as C from "./style";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
useQuery;
const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const handleSubmit = async () => await userServices.login({
      email: email.current,
      password: password.current,
    });
  const mutationLogin = useMutation(handleSubmit, {
    onSuccess: (data) => {
      localStorage.setItem('english-token',data.token)
      toast.error("Lorem ipsum dolor")
      redirect("/");
    },
    onError: ({ response }) => {
      console.log(response.data);
    },
  });
  return (
    <C.Container>
      <C.ContainerLogin>
        <C.TextWelcome> Bem vindo de volta! 👋 </C.TextWelcome>
        <C.TittleLogin> Entre com sua conta </C.TittleLogin>
        <C.Field>
          <C.Label>Email</C.Label>
          <C.Input onChange={(e) => (email.current = e.target.value)} />
        </C.Field>
        <C.Field>
          <C.Label>Password</C.Label>
          <C.Input onChange={(e) => (password.current = e.target.value)} />
        </C.Field>

        <C.ButtonSubmit onClick={() => mutationLogin.mutate()}>
          ENTRAR
        </C.ButtonSubmit>

        <C.RecoverPassword>Recuperar minha senha</C.RecoverPassword>
      </C.ContainerLogin>
      <C.CreateAccountLink>
        Não tem uma conta ? <span>Crie uma agora.</span>
      </C.CreateAccountLink>
    </C.Container>
  );
};

export default Login;
