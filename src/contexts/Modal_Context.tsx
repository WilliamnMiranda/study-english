import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
interface IProps {
  children: ReactNode;
}

type modalTypes = null | 'collection' | 'deck' | 'card' | 'training'
type modalAction = 'open' | 'close'

export interface IModal {
  isOpen: boolean,
  type: modalTypes
}

export interface IModalContext {
  modal: IModal,
  setModal: Dispatch<SetStateAction<IModal>>,
  setTypeModal: (type: modalTypes, action: modalAction, activeItem?: string) => void
  activeItem?: string | null,
}

const initalValue = {
  modal: {
    isOpen: false,
    type: null
  },
  setModal: () => { },
  setTypeModal: () => { },
  activeItem: null
}

export const ModalContext = createContext<IModalContext>(initalValue)

export const ModalProvider = ({ children }: IProps) => {
  const [modal, setModal] = useState<IModal>({
    isOpen: false,
    type: null,
  })
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const setTypeModal = (type: modalTypes, action: modalAction, activeItem: string | null = null) => {
    if (action === 'open') setActiveItem(activeItem)

    setModal({
      type: type,
      isOpen: action === 'open' ? true : false
    })

    if (action !== 'open')
      setActiveItem(null)
  }
  return (
    <ModalContext.Provider value={{ modal, setModal, setTypeModal, activeItem }}>
      {children}
    </ModalContext.Provider>
  );
};
