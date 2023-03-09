import React from 'react'
import * as C from './style'
interface IProps {
  currentCollection?: boolean
}
const ProgressBar = ({currentCollection} :IProps) => {
  return (
    <C.ContainerProgress>
      <C.Progress currentCollection={currentCollection} />
    </C.ContainerProgress>
  )
}

export default ProgressBar