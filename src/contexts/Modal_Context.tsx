import { createContext, ReactNode, SetStateAction, useState } from "react";
interface IProps {
  children: ReactNode;
}
interface ModalContextType {
  modalStatus: boolean;
  setModalStatus: React.Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as ModalContextType);
export const ModalProvider = ({ children }: IProps) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  return (
    <ModalContext.Provider value={{ modalStatus, setModalStatus }}>
      {children}
    </ModalContext.Provider>
  );
};
