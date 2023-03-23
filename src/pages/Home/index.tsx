import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../../contexts/Collection_Context";
import { ICollection, IInfos } from "../../interfaces/collections_interface";
import collectionServices from "../../services/Collection";
import decksServices from "../../services/Decks";
import EmptyImage from '../../assets/empty.svg'
import Decks from "./Decks";
import HeaderHome from "./HeaderHome";
import LoadingImage from '../../assets/loading.gif'
import Modal from "../../components/modal";
import { ModalContext } from "../../contexts/Modal_Context";
import * as C from './style'
const Home = () => {
  const { activeCollection } = useContext(CollectionContext);
  const { modal } = useContext(ModalContext)
  const [info, setInfo] = useState<IInfos | null>(null);
  console.log(activeCollection)
  const mutateDeck = useMutation(() => decksServices.getAll(activeCollection), {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: ({ response }) => {
      console.log(response.data);
    },
  });

  const { data: decks, isLoading } = useQuery(['decks', activeCollection], () =>
    decksServices.getAll(activeCollection),
    {
      enabled: !!activeCollection
    }
  );
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
  console.log(decks)



  const EmptyCards = () => {
    return (
      <C.ContainerEmpty>
        <img src={EmptyImage} />
        <p>Voce nao possui nenhum cartao criado</p>
        <button> Criar um Deck</button>
      </C.ContainerEmpty>
    )
  }
  return (
    <>
      {modal.isOpen && <Modal />}
      {
        activeCollection === '' ? <EmptyCards /> : <>
          {
            mutateDeck !== undefined && info &&
            <div>
              <HeaderHome infos={info} />
              <Decks decks={decks} />
            </div>
          }
        </>
      }
    </>
  );
};

export default Home;
