import React, { FunctionComponent, useContext, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import userServices from '../../services/User';
import Layout from '../layout';
import { UserContext } from '../../contexts/User_Context';
import Login from '../../pages/Login';

interface IProps {
  element: FunctionComponent
}
const PrivateRoute = ({ element: Element }: IProps) => {
  const navigate = useNavigate();
  const { authenticate } = useContext(UserContext)
  const authenticateUser = async () => {
    const token: any = localStorage.getItem('english-token')

    if (!token) return navigate('/login')

    const userAccount = await userServices.auth(token)

    if (!userAccount) return navigate('/login')
  }

  useEffect(() => {
    authenticateUser()
  }, [])
  return (
    <Layout>
      <Element />
    </Layout>
  )
}

export default PrivateRoute