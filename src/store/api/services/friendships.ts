import axios from 'axios';
import IFriendship from '~/types/friendship.type';

export function getFriendships() {
  return axios.get<IFriendship[]>('users/friendships/1').then((res) => res.data);
}

export function createFriendship({ toId }: { toId: number }) {
  return axios.post<IFriendship>(`users/1/friendships/${toId}`).then((res) => res.data);
}
