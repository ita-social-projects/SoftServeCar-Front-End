import User from "../../models/user/User";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Axios from "../Axios";

const route = APIRoutes.getUserUrl();

const UserService = {
    getUser: async (id: number) => APIService.get<User>(route + id),

    updateUser: async (user: FormData) => Axios.put<FormData>(route, user)
};

export default UserService;
