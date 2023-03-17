import React from 'react'
import { IDecks } from '../../../../interfaces/decks_interfaces'
import * as C from './style'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import ProgressBar from '../../../../components/progress_bar';
import { Container } from '../../../Login/style';
interface IPropsDeck {
  deck: IDecks
}

const Deck = ({ deck }: IPropsDeck) => {
  return (
    <C.ContainerDeck>
      <C.ContainerCompleted>
        <C.ContainerIconCompleted> <AiOutlineCheck /> </C.ContainerIconCompleted>
        <C.PercentageCompleted> 100% </C.PercentageCompleted>
      </C.ContainerCompleted>
      <C.ContainerName>
        <C.ContainerInfoNameAndCompletedTasks>
          <C.Name> {deck.name} </C.Name>
          <C.TotalCompleteds> 0 de {deck.cards.length} cards estudados </C.TotalCompleteds>
        </C.ContainerInfoNameAndCompletedTasks>
        <C.ContainerProgressPercentage>
          <C.ContainerPercentage progress={20} />
        </C.ContainerProgressPercentage>
      </C.ContainerName>
    </C.ContainerDeck>
  )
}

export default Deck