const backendHost = "https://jsonplaceholder.typicode.com";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const formatSentenceCase = (sentence: string): string =>
  sentence.charAt(0).toLocaleUpperCase() + sentence.slice(1);

export const formatTitleCase = (title: string): string =>
  title.split(" ").map(formatSentenceCase).join(" ");

export const buildPostSlug = (post: Post): string =>
  `${post.id}-${post.title.toLocaleLowerCase().replaceAll(" ", "-")}`;

export const parsePostSlug = (slug: string): number => Number.parseInt(slug);

export const getPosts = (): Promise<Post[]> =>
  fetch(`${backendHost}/posts`).then((res) => res.json());

export const getPost = (id: number | string): Promise<Post> =>
  fetch(`${backendHost}/posts/${id}`).then((res) => res.json());

export const getPostComments = (postId: number | string): Promise<Comment[]> =>
  fetch(`${backendHost}/comments?postId=${postId}`).then((res) => res.json());
