import axios from 'axios';
import IPost from '~/types/post.type';

export function getPosts() {
  return axios.get<IPost[]>('/posts').then((res) => res.data);
}

export function createPost({ htmlContent }: { htmlContent: string }) {
  return axios.post<IPost[]>('/users/1/posts', { htmlContent }).then((res) => res.data);
}
