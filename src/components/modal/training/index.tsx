import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../../contexts/Modal_Context';
import useReviewDecks from '../../../hooks/useIncompleteCards ';
import decksServices from '../../../services/Decks';
import * as C from './style'
import EmptyImage from '../../../assets/empty.svg'

const Modal = () => {
  const { activeItem } = useContext(ModalContext);
  const { currentItem, showResult, activeResult, changeCard, value, setValue } = useReviewDecks(activeItem as string)
  return (
    <C.ContainerTraining>
      <C.ContainerFront>
        <C.Label> Parte da da frente</C.Label>
        <C.ContainerResponseFront> <p>{currentItem?.front}</p> </C.ContainerResponseFront>
      </C.ContainerFront>

      <C.ContainerFront>
        <C.Label> Resposta </C.Label>
        <C.InputResponse value={value} onChange={(e) => setValue(e.target.value)} />
      </C.ContainerFront>
      {activeResult && <>
        <C.Label> Resposta correta</C.Label>
        <C.BackResponseCard>{currentItem?.back}</C.BackResponseCard>
      </>}
      {

        !activeResult ? <C.ButtonSubmit onClick={() => showResult()}> Enviar </C.ButtonSubmit> :
          <C.ContainerButtonResult>
            <C.ButtonConfirm onClick={changeCard}> Acertei </C.ButtonConfirm>
            <C.ButtonDecline> Errei </C.ButtonDecline>
          </C.ContainerButtonResult>
      }
    </C.ContainerTraining>
  )
}

const EmptyCards = () => {
  return (
    <C.ContainerEmpty>
      <img src={EmptyImage} />
      <p>Voce nao possui nenhum cartao criado</p>
    </C.ContainerEmpty>
  )
}

const ModalTraining = () => {
  const { activeItem } = useContext(ModalContext);
  const { data, isLoading } = useReviewDecks(activeItem as string)

  if (isLoading)
    return <div> carregando </div>

  return (
    data.length > 0 ? <Modal /> : <EmptyCards />
  )
}

export default ModalTraining