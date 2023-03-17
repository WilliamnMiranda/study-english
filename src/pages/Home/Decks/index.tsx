import React from 'react'
import * as C from './style'

interface IProps {
  decks: [{
    cards: [],
    name: string,
    code: string,
    collection_name: string,
    _id: string,
    user: string
  }]
}
const Decks = ({ decks }: IProps) => {
  return (
    <C.ContainerDecks>
      {decks.length > 0 ? decks.map((item) => <div> a </div>) : <div>nada</div>}
    </C.ContainerDecks>
  )
}

export default Decks