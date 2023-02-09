import axios from 'axios';
import IPostComment from '~/types/post-comment';

export function getPostComments({ postId, limit }: { postId: number; limit: number | string }) {
  return axios.get<IPostComment[]>(`/posts/${postId}/comments/${limit}`).then((res) => res.data);
}

export function createPostComment({ postId, text }: { postId: number; text: string }) {
  return axios
    .post<IPostComment>(`/users/1/posts/${postId}/comments/`, { text })
    .then((res) => res.data);
}
