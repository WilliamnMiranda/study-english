import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../../contexts/Collection_Context";
import { ICollection, IInfos } from "../../interfaces/collections_interface";
import collectionServices from "../../services/Collection";
import decksServices from "../../services/Decks";
import Decks from "./Decks";
import HeaderHome from "./HeaderHome";

const Home = () => {
  const { activeCollection } = useContext(CollectionContext);
  const [info, setInfo] = useState<IInfos | null>(null);
  const mutationLogin = useMutation(() => decksServices.getAll(activeCollection), {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: ({ response }) => {
      console.log(response.data);
    },
  });
  const getCollection = async () => {
    const info = await collectionServices.getInfo(activeCollection);
    setInfo(info);
  };
  useEffect(() => {
    if (activeCollection) {
      getCollection();
      mutationLogin.mutate()
    }
  }, [activeCollection]);
  return (
    info ? (
      <div>
        <HeaderHome infos={info} />
        <Decks />
      </div>
    ) : <div>loading</div>
  );
};

export default Home;
