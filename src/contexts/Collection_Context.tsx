import { createContext, ReactNode, SetStateAction, useState } from "react";
interface IProps {
  children: ReactNode;
}
interface CollectionContextType {
  activeCollection: string | undefined;
  setActiveCollection: React.Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext({} as CollectionContextType);
export const AuthProvider = ({ children }: IProps) => {
  const [activeCollection, setActiveCollection] = useState<string>('');
  return (
    <AuthContext.Provider value={{setActiveCollection,activeCollection}}>
      {children}
    </AuthContext.Provider>
  );
};
