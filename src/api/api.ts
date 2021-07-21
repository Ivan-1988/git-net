import axios from "axios";
import {GetStateComponentDidMountType} from "../components/Users/UsersContainer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY' : 'e4e26324-dab8-4ed5-abc1-391dec6e2c5c'}
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get<GetStateComponentDidMountType>(
            `users?page=${currentPage}&count=${pageSize}`).then(responce => {
            return responce.data;
        });
    },
    follow(userId: number){
        return instance.post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: number){
        return instance.delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }

}


