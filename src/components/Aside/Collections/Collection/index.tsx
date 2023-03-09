import React from "react";
import useCollection from "../../../../hooks/useCollection";
import { ICollection } from "../../../../interfaces/collections_interface";
import ProgressBar from "../../../progress_bar";
import * as C from "./style";

interface IProps {
  collection: ICollection
}
const Collection = ({collection} : IProps) => {
  const { currentCollection } = useCollection()
  const activeCollection = currentCollection === collection._id ? true : false
  return (
    <C.ContainerCollection activeCollection={activeCollection}>
      <C.ImageCollection> {collection.abbreviation[0]} </C.ImageCollection>
      <C.ContainerInfosCollection>
        <C.TittleCollection>
          <C.IconVerify> </C.IconVerify>
           {collection.abbreviation} - {collection.name}
        </C.TittleCollection>
        <ProgressBar />
      </C.ContainerInfosCollection>
    </C.ContainerCollection>
  );
};

export default Collection;
