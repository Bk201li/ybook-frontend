import axios from 'axios';
import { axiosInstance } from '../axios';
import IUser from '~/types/user.type';

export function getUsers() {
  return axios.get<IUser[]>('/users').then((res) => res.data);
}

export function createUser({
  email,
  firstname,
  lastname,
}: {
  email: string;
  firstname: string;
  lastname: string;
}) {
  return axiosInstance
    .post<IUser[]>('/users/signup', { email, firstname, lastname })
    .then((res) => res.data);
}
