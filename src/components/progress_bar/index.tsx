import React from 'react'
import * as C from './style'
interface IProps {
  currentCollection?: boolean
  progress: number | string
}
const ProgressBar = ({ currentCollection, progress }: IProps) => {
  return (
    <C.ContainerProgress>
      <C.Progress currentCollection={currentCollection} progress={progress} />
    </C.ContainerProgress>
  )
}

export default ProgressBar