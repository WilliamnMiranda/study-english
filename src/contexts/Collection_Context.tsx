import { createContext, ReactNode, SetStateAction, useState } from "react";
interface IProps {
  children: ReactNode;
}
interface CollectionContextType {
  activeCollection: string;
  setActiveCollection: React.Dispatch<SetStateAction<string>>;
}

export const CollectionContext = createContext({} as CollectionContextType);
export const CollectionProvider = ({ children }: IProps) => {
  const [activeCollection, setActiveCollection] = useState<string>('');
  return (
    <CollectionContext.Provider value={{ setActiveCollection, activeCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};
