import { useState } from 'react'
import useCollection from '../../../hooks/useCollection'
import * as C from './style'
const ModalCollection = () => {
  const [name, setName] = useState('')
  const [abbreviation, setAbbreviation] = useState('')
  const { createCollection, error } = useCollection()
  return (
    <C.ContainerModalCollection>
      <C.ContainerInput>
        <C.Label>Qual o nome da sua colecao</C.Label>
        <C.InputText onChange={(e) => setName(e.target.value)} />
      </C.ContainerInput>
      <C.ContainerInput>
        <C.Label>Digite uma sigla com 3 letras para sua colecao</C.Label>
        <C.InputText onChange={(e) => setAbbreviation(e.target.value)} />
      </C.ContainerInput>
      <C.ButtonCreate onClick={() => createCollection({ name, abbreviation })}> ADICIONAR </C.ButtonCreate>
      {error && <div> {error}</div>}
    </C.ContainerModalCollection>
  )
}

export default ModalCollection