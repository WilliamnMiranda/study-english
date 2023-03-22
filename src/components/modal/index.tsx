import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/Modal_Context'
import ModalCollection from './collection'
import * as C from './style'
import { AiOutlineClose } from "react-icons/ai";
import ModalCreateDeck from './deck';
import ModalCard from './card';

interface IProps {
  type: 'collection' | 'deck' | 'card'
}

const Modal = () => {
  const modalTypes: { [key: string]: any } = {
    collection: <ModalCollection />,
    deck: <ModalCreateDeck />,
    card: <ModalCard />
  }

  const textsTypesModal: { [key: string]: any } = {
    collection: 'Criando nova colecao',
    deck: ' Criar novo deck',
    card: ' Criar novo card'
  }
  const { modal, setTypeModal } = useContext(ModalContext)
  return (
    <C.ContainerModal>
      <C.Modal>
        <C.HeaderModal onClick={() => setTypeModal(null, 'close')}>
          <C.TittleModal> {modal.type !== null && textsTypesModal[modal.type]}  </C.TittleModal>
          <AiOutlineClose />
        </C.HeaderModal>
        {
          modal.type !== null && modalTypes[modal.type]
        }
      </C.Modal>
    </C.ContainerModal>
  )
}

export default Modal