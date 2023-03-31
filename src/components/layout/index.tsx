import React, { ReactElement, useContext, useEffect } from "react";
import Aside from "../Aside";
import * as C from "./style";
import { UserContext } from "../../contexts/User_Context";

interface IProps {
  children: ReactElement;
}
const Layout = ({ children }: IProps) => {
  const { setAuthenticate } = useContext(UserContext)

  useEffect(() => {
    setAuthenticate(true)
  }, [])
  return (
    <C.Container>
      <Aside />
      <C.Page>{children}</C.Page>
    </C.Container>
  );
};

export default Layout;
