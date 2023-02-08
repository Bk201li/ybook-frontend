import axios from 'axios';
import IPostLike from '~/types/post-like';

export function getPostLikes({ postId }: { postId: number }) {
  return axios.get<IPostLike[]>(`/posts/${postId}/likes`).then((res) => res.data);
}

export function createPostLike({ postId }: { postId: number }) {
  return axios.post<IPostLike>(`users/1/posts/${postId}/likes`).then((res) => res.data);
}

export function deletePostLike({ postId }: { postId: number }) {
  return axios.delete<IPostLike>(`users/1/posts/${postId}/likes`).then((res) => res.data);
}
