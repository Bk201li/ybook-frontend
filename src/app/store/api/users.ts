import axios from 'axios';
import IUser from '~/app/types/user.type';

export function getUsers() {
  return axios.get<IUser[]>('http://localhost:3000/users').then((res) => res.data);
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
  return axios
    .post<IUser[]>('http://localhost:3000/users/signup', { email, firstname, lastname })
    .then((res) => res.data);
}
