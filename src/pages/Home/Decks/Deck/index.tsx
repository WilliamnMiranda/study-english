import { useContext } from 'react'
import { IDecks } from '../../../../interfaces/decks_interfaces'
import * as C from './style'
import { AiOutlineCheck } from "react-icons/ai";
import useDeck from '../../../../hooks/useDeck'
import { AiOutlinePlusCircle, AiFillEdit, AiOutlineHeart, AiOutlinePlayCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { ModalContext } from '../../../../contexts/Modal_Context';
interface IPropsDeck {
  deck: IDecks
}

const Deck = ({ deck }: IPropsDeck) => {
  const { verifyCompletedCards } = useDeck();
  const {
    numberCompletedCards,
    totalCards
  } = verifyCompletedCards(deck)
  const progressCompleted = Math.floor((numberCompletedCards / totalCards) * 100)
  const { setTypeModal } = useContext(ModalContext)
  return (
    <C.ContainerDeck>
      <C.ContainerCompleted>
        <C.ContainerIconCompleted> <AiOutlineCheck /> </C.ContainerIconCompleted>
        <C.PercentageCompleted> 100% </C.PercentageCompleted>
      </C.ContainerCompleted>
      <C.ContainerName>
        <C.ContainerInfoNameAndCompletedTasks>
          <C.Name> {deck.name} </C.Name>
          <C.TotalCompleteds> {numberCompletedCards} de {deck.cards.length} cards estudados </C.TotalCompleteds>
        </C.ContainerInfoNameAndCompletedTasks>
        <C.ContainerProgressPercentage>
          <C.ContainerPercentage progress={progressCompleted} />
        </C.ContainerProgressPercentage>
      </C.ContainerName>

      <C.ContainerOptions>
        <AiOutlinePlayCircle onClick={() => setTypeModal('training', 'open', deck._id)} />
        <AiOutlinePlusCircle onClick={() => setTypeModal('card', 'open', deck._id)} />
        <AiOutlineHeart />
        <AiFillEdit />
        <AiOutlineCloseCircle />
      </C.ContainerOptions>
    </C.ContainerDeck>
  )
}

export default Deck