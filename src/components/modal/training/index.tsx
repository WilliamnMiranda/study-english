import React, { useContext } from 'react'
import { ModalContext } from '../../../contexts/Modal_Context';

const ModalTraining = () => {
  const { activeItem } = useContext(ModalContext);
  console.log(activeItem)
  return (
    <div>index</div>
  )
}

export default ModalTraining