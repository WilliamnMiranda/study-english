import React from "react";
import * as C from "./style";
import { AiOutlineSearch,AiOutlinePlus } from "react-icons/ai";
import Collection from "./Collection";
import { useQuery } from "@tanstack/react-query";
import collectionServices from "../../../services/Collection";
import { ICollection } from "../../../interfaces/collections_interface";
const Collections = () => {
  const { data } = useQuery({
    queryKey: ['colections'],
    queryFn: ()=> collectionServices.getAll()
  })
  console.log(data)
  return (
    <C.ContainerCollection>
      <C.HeaderSearch>
        Minhas coleçoes ({data ? data.length : 0})
        <C.ContainerOptionsCollection>
          <C.ButtonAddCollection> <AiOutlinePlus/> </C.ButtonAddCollection>
          <C.ButtonSearchCollection> <AiOutlineSearch /> </C.ButtonSearchCollection>
        </C.ContainerOptionsCollection>
      </C.HeaderSearch>

      <C.ContainerCollections>
          {
            data?.map((collection : ICollection)=> <Collection collection={collection} /> )
          }
      </C.ContainerCollections>
    </C.ContainerCollection>
  );
};

export default Collections;
