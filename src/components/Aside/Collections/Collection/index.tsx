import { useContext } from "react";
import useCollection from "../../../../hooks/useCollection";
import { ICollection } from "../../../../interfaces/collections_interface";
import ProgressBar from "../../../progress_bar";
import * as C from "./style";
import { CollectionContext } from "../../../../contexts/Collection_Context";

interface IProps {
  collection: ICollection;
}
const Collection = ({ collection }: IProps) => {
  const { verifyCompletedCollections } = useCollection();
  const { activeCollection, setActiveCollection } = useContext(CollectionContext)
  const currentCollection = activeCollection!._id === collection._id ? true : false;
  const {
    totalCardsCompleted,
    totalCards,
  } = verifyCompletedCollections(collection)
  const progressCompleted = Math.floor((totalCardsCompleted / totalCards) * 100)
  return (
    <C.ContainerCollection
      currentCollection={currentCollection}
      onClick={() => setActiveCollection(collection)}
    >
      <C.ImageCollection> {collection.abbreviation[0]} </C.ImageCollection>
      <C.ContainerInfosCollection>
        <C.TittleCollection>
          <C.IconVerify> </C.IconVerify>
          {collection.abbreviation} - {collection.name}
        </C.TittleCollection>
        <ProgressBar currentCollection={currentCollection} progress={progressCompleted} />
      </C.ContainerInfosCollection>
    </C.ContainerCollection>
  );
};

export default Collection;
