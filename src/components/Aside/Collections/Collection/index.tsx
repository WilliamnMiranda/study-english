import React from "react";
import { ICollection } from "../../../../interfaces/collections_interface";
import ProgressBar from "../../../progress_bar";
import * as C from "./style";

interface IProps {
  collection: ICollection
}
const Collection = ({collection} : IProps) => {
  return (
    <C.ContainerCollection>
      <C.ImageCollection> {collection.name[0]} </C.ImageCollection>
      <C.ContainerInfosCollection>
        <C.TittleCollection>
          <C.IconVerify> </C.IconVerify>
          {collection.name}
        </C.TittleCollection>
        <ProgressBar />
      </C.ContainerInfosCollection>
    </C.ContainerCollection>
  );
};

export default Collection;
