import React from "react";
import * as C from "./style";
import { AiOutlineSearch,AiOutlinePlus } from "react-icons/ai";
const Collections = () => {
  return (
    <C.ContainerCollection>
      <C.HeaderSearch>
        Minhas coleçoes (21)
        <C.ContainerOptionsCollection>
          <C.ButtonAddCollection> <AiOutlinePlus/> </C.ButtonAddCollection>
          <C.ButtonSearchCollection> <AiOutlineSearch /> </C.ButtonSearchCollection>
        </C.ContainerOptionsCollection>
      </C.HeaderSearch>
    </C.ContainerCollection>
  );
};

export default Collections;
