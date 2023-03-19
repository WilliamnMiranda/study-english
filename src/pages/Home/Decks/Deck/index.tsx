import React from 'react'
import { IDecks } from '../../../../interfaces/decks_interfaces'
import * as C from './style'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import ProgressBar from '../../../../components/progress_bar';
import { Container } from '../../../Login/style';
import useDeck from '../../../../hooks/useDeck'
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
  console.log(progressCompleted)
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
    </C.ContainerDeck>
  )
}

export default Deck