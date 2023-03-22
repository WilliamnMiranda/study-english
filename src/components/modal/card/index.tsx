import React, { useContext, useState } from 'react'
import { ModalContext } from '../../../contexts/Modal_Context'
import useCard from '../../../hooks/useCard'
import * as C from './style'
const ModalCard = () => {
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  const [deck, setName] = useState('')
  const { activeItem } = useContext(ModalContext)
  const { createCard } = useCard();
  const data = {
    front,
    back,
    deck: activeItem as string
  }
  return (
    <C.ContainerModalCollection>
      <C.ContainerInput>
        <C.Label>Digite oque voce ira aparecer no card</C.Label>
        <C.InputText onChange={(e) => setFront(e.target.value)} />
      </C.ContainerInput>
      <C.ContainerInput>
        <C.Label>Digite o valor a ser mostrado apos responder</C.Label>
        <C.InputText onChange={(e) => setBack(e.target.value)} />
      </C.ContainerInput>
      <C.ButtonCreate onClick={() => createCard(data)}> ADICIONAR </C.ButtonCreate>
    </C.ContainerModalCollection>
  )
}

export default ModalCard