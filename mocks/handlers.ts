import { rest } from "msw";
import { Post, Comment } from "../data/posts";

const mockedPosts: Post[] = [
  {
    id: 1,
    title: "test title",
    body: "test body",
    userId: 1,
  },
];
const mockedComments: Comment[] = [
  {
    id: 1,
    name: "test name",
    email: "test@example.com",
    body: "test body",
    postId: 1,
  },
  {
    id: 2,
    name: "another test name",
    email: "test@example.com",
    body: "another test body",
    postId: 1,
  },
];

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockedPosts))
  ),
  rest.get(
    "https://jsonplaceholder.typicode.com/posts/:id",
    (req, res, ctx) => {
      const { id } = req.params;
      return res(
        ctx.status(200),
        ctx.json(mockedPosts.find((p) => p.id === Number.parseInt(id)))
      );
    }
  ),
  rest.get("https://jsonplaceholder.typicode.com/comments", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockedComments))
  ),
  rest.get(
    "https://jsonplaceholder.typicode.com/comments/:postId",
    (req, res, ctx) => {
      const { postId } = req.params;
      return res(
        ctx.status(200),
        ctx.json(
          mockedComments.find((p) => p.postId === Number.parseInt(postId))
        )
      );
    }
  ),
];
