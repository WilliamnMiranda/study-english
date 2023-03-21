import React from 'react'
import * as C from './style'
const ModalCollection = () => {
  return (
    <C.ContainerModalCollection>
      <C.ContainerInput>
        <C.Label>Qual o nome da sua colecao</C.Label>
        <C.InputText />
      </C.ContainerInput>
      <C.ContainerInput>
        <C.Label>Digite uma sigla com 3 letras para sua colecao</C.Label>
        <C.InputText />
      </C.ContainerInput>
      <C.ButtonCreate> ADICIONAR </C.ButtonCreate>
    </C.ContainerModalCollection>
  )
}

export default ModalCollection