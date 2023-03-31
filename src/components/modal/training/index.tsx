import { useContext } from 'react'
import { ModalContext } from '../../../contexts/Modal_Context';
import useReviewDecks from '../../../hooks/useIncompleteCards ';
import * as C from './style'
import EmptyImage from '../../../assets/empty.svg'
import { BeatLoader } from 'react-spinners';

const Modal = () => {
  const { activeItem } = useContext(ModalContext);
  const { currentItem, showResult, activeResult, changeCard, value, setValue, declineCard, loadingMutation } = useReviewDecks(activeItem as string)
  return (
    <>
      {
        loadingMutation ? <BeatLoader color="#3da4da" size={25} /> : <C.ContainerTraining>
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
                <C.ButtonDecline onClick={declineCard}> Errei </C.ButtonDecline>
              </C.ContainerButtonResult>
          }
        </C.ContainerTraining>
      }
    </>
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
    return <C.ContainerLoading> <BeatLoader color="#3da4da" size={25} /> </C.ContainerLoading>

  return (
    data.length > 0 ? <Modal /> : <EmptyCards />
  )
}

export default ModalTraining