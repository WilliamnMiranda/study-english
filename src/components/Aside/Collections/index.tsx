import React, { useContext } from "react";
import * as C from "./style";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import Collection from "./Collection";
import { useMutation, useQuery } from "@tanstack/react-query";
import collectionServices from "../../../services/Collection";
import { ICollection } from "../../../interfaces/collections_interface";
import { CollectionContext } from "../../../contexts/Collection_Context";
import { ModalContext } from "../../../contexts/Modal_Context";
const Collections = () => {
  const { activeCollection, setActiveCollection } = useContext(CollectionContext);
  const { data } = useQuery({
    queryKey: ['colections'],
    queryFn: () => collectionServices.getAll()
  })
  const { setTypeModal } = useContext(ModalContext)
  const mutate = useMutation(() => collectionServices.create({ name: 'Estetica', abbreviation: 'EST' }), {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: ({ response }) => {
      console.log(response.data);
    },
  });

  React.useEffect(() => {
    if (data)
      setActiveCollection(data[0]._id)
  }, [data])

  return (
    <C.ContainerCollection>
      <C.HeaderSearch>
        Minhas coleçoes ({data ? data.length : 0})
        <C.ContainerOptionsCollection>
          <C.ButtonAddCollection onClick={() => setTypeModal('collection', 'open')}> <AiOutlinePlus /> </C.ButtonAddCollection>
          <C.ButtonSearchCollection> <AiOutlineSearch /> </C.ButtonSearchCollection>
        </C.ContainerOptionsCollection>
      </C.HeaderSearch>

      <C.ContainerCollections>
        {
          data?.map((collection: ICollection) => <Collection collection={collection} />)
        }
      </C.ContainerCollections>
    </C.ContainerCollection>
  );
};

export default Collections;
