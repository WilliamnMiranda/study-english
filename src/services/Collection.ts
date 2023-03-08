import { api } from '../helpers/api';
import { UserLogin } from './../interfaces/user_interfaces';
const collectionServices = {
  getAll : async () => {
    return await (await api.get('/collection')).data
  }
}

export default collectionServices