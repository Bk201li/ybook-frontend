import axios from 'axios';
import IPostLike from '~/types/post-like';

export function getPostLikes() {
  return axios.get<IPostLike[]>('/posts/1/likes').then((res) => res.data);
}

export function createPostLike() {
  return axios.post<IPostLike>('users/1/posts/1/likes').then((res) => res.data);
}
