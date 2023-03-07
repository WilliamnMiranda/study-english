import React, { ReactElement } from "react";
import Aside from "../Aside";
import * as C from "./style";

interface IProps {
  children: ReactElement;
}
const Layout = ({ children }: IProps) => {
  return (
    <C.Container>
      <Aside />
      <C.Page>{children}</C.Page>
    </C.Container>
  );
};

export default Layout;
