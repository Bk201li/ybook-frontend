import axios from 'axios';
import IPostComment from '~/types/post-comment';

export function getPostComments() {
  return axios.get<IPostComment[]>('/posts/1/comments/').then((res) => res.data);
}

export function createPostComment({ postId, text }: { postId: number; text: string }) {
  return axios
    .post<IPostComment>(`/users/1/posts/${postId}/comments/`, { text })
    .then((res) => res.data);
}
