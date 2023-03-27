import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../../contexts/Modal_Context';
import useReviewDecks from '../../../hooks/useIncompleteCards ';
import decksServices from '../../../services/Decks';
import * as C from './style'
import { ICard } from '../../../interfaces/cards_interfaces';
const ModalTraining = () => {

  const { activeItem } = useContext(ModalContext);
  const { isLoading, currentItem, showResult, activeResult, changeCard } = useReviewDecks(activeItem as string)

  if (isLoading)
    return <div> carregando </div>


  return (
    <C.ContainerTraining>
      <C.ContainerFront>
        <C.Label> Parte da da frente</C.Label>
        <C.ContainerResponseFront> <p>{currentItem?.front}</p> </C.ContainerResponseFront>
      </C.ContainerFront>

      <C.ContainerFront>
        <C.Label> Resposta </C.Label>
        <C.InputResponse />
      </C.ContainerFront>
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

export default ModalTraining