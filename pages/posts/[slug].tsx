import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import PostDetail from "../../components/PostDetail";
import { parsePostSlug } from "../../data/posts";

const LinkWrapper = styled.div`
  margin-top: 1rem;
`;

const Main = styled.main`
  margin: 2rem auto;
  max-width: 40em;
`;

export default function PostDetailPage(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  if (slug === undefined) return <div>loading...</div>;

  const postId = parsePostSlug(slug as string);

  return (
    <Main>
      <PostDetail id={postId} />
      <LinkWrapper>
        <Link href="/">back to main page</Link>
      </LinkWrapper>
    </Main>
  );
}
