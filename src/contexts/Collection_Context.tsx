import { createContext, ReactNode, SetStateAction, useState } from "react";
import { IInfos } from "../interfaces/collections_interface";
interface IProps {
  children: ReactNode;
}
interface CollectionContextType {
  activeCollection: string;
  setActiveCollection: React.Dispatch<SetStateAction<string>>;
  info: IInfos | null
  setInfo: React.Dispatch<SetStateAction<IInfos | null>>;
}

export const CollectionContext = createContext({} as CollectionContextType);
export const CollectionProvider = ({ children }: IProps) => {
  const [activeCollection, setActiveCollection] = useState<string>('');
  const [info, setInfo] = useState<IInfos | null>(null);
  return (
    <CollectionContext.Provider value={{ setActiveCollection, activeCollection, info, setInfo }}>
      {children}
    </CollectionContext.Provider>
  );
};
