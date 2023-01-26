import axios from 'axios';
import IPost from '~/types/post.type';

export function getPosts() {
  return axios.get<IPost[]>('/posts').then((res) => res.data);
}

export function createPost({ htmlContent, userId }: { htmlContent: string; userId: number }) {
  return axios.post<IPost[]>('/posts', { htmlContent, userId }).then((res) => res.data);
}
