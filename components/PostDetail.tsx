import Head from "next/head";
import { useQuery } from "react-query";
import styled from "@emotion/styled";
import { getPost, formatSentenceCase, formatTitleCase } from "../data/posts";
import PostComments from "./PostComments";

const Wrapper = styled.div``;

const Title = styled.h1`
  font-weight: bold;
  margin: 1rem 0;
  font-size: 2em;
`;

const Body = styled.div`
  margin: 1rem 0;
`;

export default function PostDetail({
  id,
}: {
  id: number | string;
}): JSX.Element {
  const { isLoading, error, data } = useQuery(`get`, () => getPost(id));

  if (isLoading) return <div>loading&hellip;</div>;
  if (error) return <div>error loading post</div>;
  if (!data) return <div>post not found</div>;

  return (
    <>
      <Head>
        <title>{formatTitleCase(data.title)}</title>
      </Head>
      <Wrapper>
        <Title>{formatTitleCase(data.title)}</Title>
        <Body>{formatSentenceCase(data.body)}</Body>
        <PostComments id={id} />
      </Wrapper>
    </>
  );
}
