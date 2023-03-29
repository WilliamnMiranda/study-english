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
import Collections from '../../assets/Collections.svg'
import Modal from "../../components/modal";
import * as C from './style'


const Home = () => {
  const { activeCollection, info, setInfo } = useContext(CollectionContext);
  const { modal } = useContext(ModalContext)
  const mutateDeck = useMutation(() => decksServices.getAll(activeCollection), {

  });
  const { data: decks, isLoading, refetch } = useQuery(['decks', activeCollection], () =>
    decksServices.getAll(activeCollection),
    {
      enabled: !!activeCollection
    }
  );
  useEffect(() => {
    getCollection();
  }, [decks])
  const getCollection = async () => {
    const info = await collectionServices.getInfo(activeCollection);
    setInfo(info);
  };

  useEffect(() => {
    if (activeCollection) {
      getCollection();
      mutateDeck.mutate()
    }
  }, [activeCollection]);

  const EmptyCards = () => {
    return (
      <C.ContainerEmpty>
        <img src={Collections} />
        <p>Voce nao possui nenhuma colecao criada criada</p>
        <button> Criar uma colecao</button>
      </C.ContainerEmpty>
    )
  }
  if (isLoading)
    return (
      <C.ContainerLoading>
        <BeatLoader color="#3da4da" size={25} />
      </C.ContainerLoading>
    )
  return (
    <>
      {modal.isOpen && <Modal />}
      {
        activeCollection === '' ? <EmptyCards /> : <>
          {
            mutateDeck !== undefined && info &&
            <div>
              <HeaderHome />
              <Decks decks={decks} />
            </div>
          }
        </>
      }
    </>
  );
};

export default Home;
