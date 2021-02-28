import { useQuery } from "react-query";
import styled from "@emotion/styled";
import {
  getPostComments,
  formatTitleCase,
  formatSentenceCase,
} from "../data/posts";

const Wrapper = styled.div`
  font-size: 0.9em;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Comment = styled.div`
  margin-top: 1rem;

  &:first-of-type {
    margin-top: 0;
  }
`;

const Name = styled.div`
  font-weight: bold;
`;

const Body = styled.div`
  margin-top: 0.5rem;
`;

export default function Comments({ id }: { id: number | string }): JSX.Element {
  const { isLoading, error, data } = useQuery("getPostComments", () =>
    getPostComments(id)
  );

  if (isLoading) return <div>loading&hellip;</div>;
  if (error || !Array.isArray(data)) return <div>error loading comments</div>;
  if (data.length === 0) return <div>no comments found</div>;

  return (
    <Wrapper>
      {data.map((comment) => (
        <Comment key={comment.id}>
          <Name>{formatTitleCase(comment.name)}</Name>
          <Body>{formatSentenceCase(comment.body)}</Body>
        </Comment>
      ))}
    </Wrapper>
  );
}
