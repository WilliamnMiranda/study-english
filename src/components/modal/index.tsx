import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/Modal_Context'
import ModalCollection from './collection'
import * as C from './style'

interface IProps {
  type: 'collection' | 'deck' | 'card'
}

const Modal = () => {
  const modalTypes: { [key: string]: any } = {
    collection: <ModalCollection />
  }
  const { modal, setTypeModal } = useContext(ModalContext)
  return (
    <C.ContainerModal>
      <C.Modal>
        <C.HeaderModal onClick={() => setTypeModal(null, 'close')}> X </C.HeaderModal>
        {
          modal.type !== null && modalTypes[modal.type]
        }
      </C.Modal>
    </C.ContainerModal>
  )
}

export default Modal