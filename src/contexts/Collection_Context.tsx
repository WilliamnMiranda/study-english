import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { UserContext } from "./User_Context";
import collectionServices from "../services/Collection";
import { ICollection, IInfos } from "../interfaces/collections_interface";
import decksServices from "../services/Decks";
import { IDecks } from "../interfaces/decks_interfaces";
interface IProps {
  children: ReactNode;
}
interface CollectionContextType {
  activeCollection: ICollection | null,
  isLoading: boolean,
  data: ICollection,
  collections: ICollection[] | null,
  setActiveCollection: React.Dispatch<SetStateAction<ICollection | null>>,
  infoCollection: IInfos | null
  decks: IDecks[]
}

export const CollectionContext = createContext({} as CollectionContextType);
export const CollectionProvider = ({ children }: IProps) => {
  const [collections, setCollection] = useState<ICollection[] | null>(null);
  const [activeCollection, setActiveCollection] = useState<ICollection | null>(null)
  const [infoCollection, setInfoCollection] = useState<IInfos | null>(null)
  const { authenticate } = useContext(UserContext)
  const { data, isLoading } = useQuery({
    queryKey: ['collections'],
    queryFn: () => collectionServices.getAll(),
  })

  const { data: decks, isLoading: loadingDecsks, refetch } = useQuery(['decks', activeCollection], () =>
    decksServices.getAll(activeCollection!._id),
    {
      enabled: !!activeCollection
    }
  );
  const getInfo = async () => {
    if (activeCollection) {
      const data = await collectionServices.getInfo(activeCollection!._id)
      setInfoCollection(data)
      refetch()
    }
  }

  useEffect(() => {
    if (activeCollection)
      getInfo()
  }, [activeCollection])

  useEffect(() => {
    if (data !== undefined) {
      setActiveCollection(data[0])
      setCollection(data)
    }
  }, [data])

  return (
    <CollectionContext.Provider value={{ collections, data, isLoading, activeCollection, setActiveCollection, infoCollection, decks }}>
      {children}
    </CollectionContext.Provider>
  );
};
