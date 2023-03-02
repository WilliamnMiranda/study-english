import React, { FunctionComponent } from 'react'
import { Navigate } from "react-router-dom";

interface IProps {
  element: FunctionComponent
}
const PrivateRoute = ({element:Element}: IProps) => {
  const auth = false
  if(auth)
   return <Element />
  return <Navigate to="/login" replace={true} />;
}

export default PrivateRoute