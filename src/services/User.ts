import { api } from '../helpers/api';
import { UserLogin } from './../interfaces/user_interfaces';
const userServices = {
  login : async (data : UserLogin) => {
    const user = await (await api.post('/access/login')).data
    console.log(data)
    return user
  }
}

export default userServices