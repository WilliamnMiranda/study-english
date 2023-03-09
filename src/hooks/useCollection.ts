import { useState } from 'react';
const useCollection = () => {

  const [currentCollection,setCurrentCollection] = useState<string>('640911bbbe55e76e3027f105')
  const changeCollection = (_id : string) => {
    if(_id === currentCollection) return
      setCurrentCollection(_id)
  }
  return {
    currentCollection
  }
}


export default useCollection