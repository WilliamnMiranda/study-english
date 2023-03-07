import React, { FunctionComponent } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import userServices from '../../services/User';
import Layout from '../layout';

interface IProps {
  element: FunctionComponent
}
const PrivateRoute = ({element:Element}: IProps) => {
  const navigate = useNavigate();
  const authenticateUser = async () => {
    const token: any = localStorage.getItem('english-token')
    if (token) {
      const user = await userServices.auth(token)
      if (!user) {
        navigate('/login')
      }
      else{
        navigate('/')
      }
    }
    navigate('/login')
  }
  React.useEffect(() => {
    authenticateUser()
  }, [])
  return (
    <Layout>
      <Element />
    </Layout>
  )
}

export default PrivateRoute