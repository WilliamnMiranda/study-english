import { ReactNode, createContext, useEffect, useState } from "react";
import { IUser } from "../interfaces/user_interfaces";
import userServices from "../services/User";

interface IProps {
  children: ReactNode;
}

interface IContextUser {
  setAuthenticate: React.Dispatch<React.SetStateAction<boolean>>,
  authenticate: boolean,
  loading: boolean,
  user: IUser | undefined
}
export const UserContext = createContext({} as IContextUser);

export const UserStorage = ({ children }: IProps) => {
  const [authenticate, setAuthenticate] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>()
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <UserContext.Provider value={{ user, setAuthenticate, loading, authenticate }}>
      {children}
    </UserContext.Provider>
  )
}