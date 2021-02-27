import Head from "next/head";
import styled from "@emotion/styled";
import PostList from "../components/PostList";

const Main = styled.main`
  margin: 2rem auto;
  max-width: 40em;
`;

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>My Awesome Blog</title>
      </Head>
      <Main>
        <h1>My Awesome Blog</h1>
        <PostList />
      </Main>
    </>
  );
}
