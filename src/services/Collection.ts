import { api } from "../helpers/api";
import { UserLogin } from "./../interfaces/user_interfaces";
const collectionServices = {
  getAll: async () => {
    return await (
      await api.get("/collection")
    ).data;
  },
  getOne: async (id: string) => {
    return await (
      await api.get(`/collection/${id}`)
    ).data;
  },
  getInfo: async (id: string) => {
    return await (
      await api.get(`/collection/infos/${id}`)
    ).data;
  },
};

export default collectionServices;
