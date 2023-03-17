import React from "react";
import useCollection from "../../../../hooks/useCollection";
import { ICollection } from "../../../../interfaces/collections_interface";
import ProgressBar from "../../../progress_bar";
import * as C from "./style";

interface IProps {
  collection: ICollection;
}
const Collection = ({ collection }: IProps) => {
  const { activeCollection, changeCollection } = useCollection();
  const currentCollection = activeCollection === collection._id ? true : false;
  return (
    <C.ContainerCollection
      currentCollection={currentCollection}
      onClick={() => changeCollection(collection._id)}
    >
      <C.ImageCollection> {collection.abbreviation[0]} </C.ImageCollection>
      <C.ContainerInfosCollection>
        <C.TittleCollection>
          <C.IconVerify> </C.IconVerify>
          {collection.abbreviation} - {collection.name}
        </C.TittleCollection>
        <ProgressBar currentCollection={currentCollection} progress={20} />
      </C.ContainerInfosCollection>
    </C.ContainerCollection>
  );
};

export default Collection;
