import React, { useContext } from 'react'
import * as C from './style'
import EmptyImage from '../../../assets/empty.svg'
import { IDecks } from '../../../interfaces/decks_interfaces'
import Deck from './Deck'
import { CollectionContext } from '../../../contexts/Collection_Context'
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

const Decks = () => {
  const { decks } = useContext(CollectionContext)
  return (
    <C.ContainerDecks>
      {
        decks !== undefined &&
          decks.length > 0 ? decks.map((deck: IDecks) => <Deck key={deck._id} deck={deck} />) : <EmptyCards />
      }
    </C.ContainerDecks>
  )
}

export default Decks