import { ReactElement, useContext, useEffect } from "react";
import Aside from "../Aside";
import * as C from "./style";
import { UserContext } from "../../contexts/User_Context";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";

interface IProps {
  children: ReactElement;
}
const Layout = ({ children }: IProps) => {
  const { authenticate } = useContext(UserContext)
  console.log(authenticate)
  return (
    authenticate ? (
      <C.Container>
        <Aside />
        <C.Page>{children}</C.Page>
      </C.Container>
    ) : <Login />
  );
};

export default Layout;
