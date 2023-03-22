import React from 'react'
import * as C from './style'
import EmptyImage from '../../../assets/empty.svg'
import { IDecks } from '../../../interfaces/decks_interfaces'
import Deck from './Deck'
interface IProps {
  decks: IDecks[]
}

const EmptyCards = () => {
  return (
    <C.ContainerEmpty>
      <img src={EmptyImage} />
      <p>Voce nao possui nenhum cartao criado</p>
      <button> Criar um Deck</button>
    </C.ContainerEmpty>
  )
}
const Decks = ({ decks }: IProps) => {
  return (
    <C.ContainerDecks>
      {decks.length > 0 ? decks.map((deck: IDecks) => <Deck deck={deck} />) : <EmptyCards />}
    </C.ContainerDecks>
  )
}

export default Decks