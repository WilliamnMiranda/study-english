import React, { ReactElement } from "react";
import * as C from "./style";

interface IProps {
  children: ReactElement;
}
const Layout = ({ children }: IProps) => {
  return (
    <C.Container>
      <C.Page>{children}</C.Page>
    </C.Container>
  );
};

export default Layout;
