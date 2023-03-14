import React, { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../../contexts/Collection_Context";
import { ICollection, IInfos } from "../../interfaces/collections_interface";
import collectionServices from "../../services/Collection";
import HeaderHome from "./HeaderHome";

const Home = () => {
  const { activeCollection } = useContext(CollectionContext);
  const [info, setInfo] = useState<IInfos>({} as IInfos);
  const getCollection = async () => {
    const info = await collectionServices.getInfo(activeCollection);
    setInfo(info);
  };
  useEffect(() => {
    if (activeCollection) getCollection();
  }, [activeCollection]);
  return (
    <div>
      <HeaderHome infos={info} />
    </div>
  );
};

export default Home;
