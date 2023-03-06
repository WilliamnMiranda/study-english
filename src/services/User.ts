import { api } from '../helpers/api';
import { UserLogin } from './../interfaces/user_interfaces';
const userServices = {
  login : async (data : UserLogin) => {
    const user = await (await api.post('/access/login')).data
  }
}

export default userServices