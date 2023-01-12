import axios from 'axios';
import IUser from '~/app/types/user.type';

export function getUsers() {
  return axios.get<IUser[]>('http://localhost:3000/users').then((res) => res.data);
}

export function createUser({
  email,
  firstName,
  lastName,
}: {
  email: string;
  firstName: string;
  lastName: string;
}) {
  return axios
    .post<IUser[]>('http://localhost:3000/users/signup', { email, firstName, lastName })
    .then((res) => res.data);
}
