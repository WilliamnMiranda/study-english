import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../../contexts/Collection_Context";
import { IInfos } from "../../interfaces/collections_interface";
import { BeatLoader } from "react-spinners";
import { ModalContext } from "../../contexts/Modal_Context";
//default imports
import collectionServices from "../../services/Collection";
import decksServices from "../../services/Decks";
import Decks from "./Decks";
import HeaderHome from "./HeaderHome";
import Collections from '../../assets/collections.svg'
import Modal from "../../components/modal";
import * as C from './style'

const EmptyCards = () => {
  return (
    <C.ContainerEmpty>
      <img src={Collections} />
      <p>Voce nao possui nenhuma colecao criada criada</p>
      <button> Criar uma colecao</button>
    </C.ContainerEmpty>
  )
}


const Home = () => {
  const { activeCollection, isLoading, decks } = useContext(CollectionContext);
  const { modal } = useContext(ModalContext)

  if (isLoading) return <BeatLoader color="#36d7b7" />

  return (
    <>
      {modal.isOpen && <Modal />}
      {isLoading ? <BeatLoader color="#36d7b7" /> : (
        <div>
          <HeaderHome />
          <Decks />
        </div>
      )}
    </>
  );
};

export default Home;
