import React from "react";
import ProgressBar  from "../../../progress_bar";
import * as C from './style'
const Collection = () => {
  return (
    <C.ContainerCollection>
      <C.ImageCollection> image </C.ImageCollection>
      <C.ContainerInfosCollection>
        <C.TittleCollection>
          <C.IconVerify> </C.IconVerify>
          VEC - Biologia
          </C.TittleCollection>
        <ProgressBar />
      </C.ContainerInfosCollection>
    </C.ContainerCollection>
  );
};

export default Collection;
