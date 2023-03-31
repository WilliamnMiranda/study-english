import { useContext, useState } from 'react'
import * as C from './style'
import useDeck from '../../../hooks/useDeck'
import { CollectionContext } from '../../../contexts/Collection_Context'
const ModalCreateDeck = () => {
  const [name, setName] = useState('')
  const { createDeck } = useDeck()
  const { activeCollection } = useContext(CollectionContext);
  return (
    <C.ContainerModalCollection>
      <C.ContainerInput>
        <C.Label>Digite o nome do seu deck</C.Label>
        <C.InputText onChange={(e) => setName(e.target.value)} />
      </C.ContainerInput>
      <C.ButtonCreate onClick={() => createDeck(name, activeCollection!._id)}> ADICIONAR </C.ButtonCreate>
    </C.ContainerModalCollection>
  )
}

export default ModalCreateDeck