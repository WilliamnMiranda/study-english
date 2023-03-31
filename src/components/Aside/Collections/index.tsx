import { useContext } from "react";
import * as C from "./style";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import Collection from "./Collection";
import { ICollection } from "../../../interfaces/collections_interface";
import { CollectionContext } from "../../../contexts/Collection_Context";
import { ModalContext } from "../../../contexts/Modal_Context";
const Collections = () => {
  const { collections } = useContext(CollectionContext);

  const { setTypeModal } = useContext(ModalContext)

  return (
    <C.ContainerCollection>
      <C.HeaderSearch>
        Minhas coleçoes ({collections ? collections.length : 0})
        <C.ContainerOptionsCollection>
          <C.ButtonAddCollection onClick={() => setTypeModal('collection', 'open')}> <AiOutlinePlus /> </C.ButtonAddCollection>
          <C.ButtonSearchCollection> <AiOutlineSearch /> </C.ButtonSearchCollection>
        </C.ContainerOptionsCollection>
      </C.HeaderSearch>

      <C.ContainerCollections>
        {
          collections?.map((collection: ICollection) => <Collection key={collection._id} collection={collection} />)
        }
      </C.ContainerCollections>
    </C.ContainerCollection>
  );
};

export default Collections;
