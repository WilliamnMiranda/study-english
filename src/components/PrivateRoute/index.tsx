import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import userServices from '../../services/User';
import Layout from '../layout';
import { UserContext } from '../../contexts/User_Context';


interface IProps {
  element: FunctionComponent
}
const PrivateRoute = ({ element: Element }: IProps) => {
  const navigate = useNavigate();
  const { setAuthenticate } = useContext(UserContext)
  const authenticateUser = async () => {
    const token: any = localStorage.getItem('english-token')

    if (!token) return navigate('/login')

    const userAccount = await userServices.auth(token)

    if (!userAccount) return navigate('/login')

    setAuthenticate(true)
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