import { CollectionContext } from './../contexts/Collection_Context';
import { useContext } from 'react';
const useCollection = () => {

  const { activeCollection,setActiveCollection } = useContext(CollectionContext)
  const changeCollection = (_id : string) => {
    if(_id === activeCollection) return
    setActiveCollection(_id)
  }
  return {
    activeCollection,
    changeCollection
  }
}


export default useCollection