import Link from "next/link";
import { useQuery } from "react-query";
import styled from "@emotion/styled";
import { getPosts, buildPostSlug, formatTitleCase } from ".././data/posts";

const Wrapper = styled.div``;

const PostPreview = styled.div`
  margin: 1rem 0;
`;

export default function PostList(): JSX.Element {
  const { isLoading, error, data } = useQuery("getPosts", getPosts);

  if (isLoading) return <div>loading&hellip;</div>;
  if (error || !Array.isArray(data)) return <div>error loading posts</div>;
  if (data.length === 0) return <div>no posts found</div>;

  return (
    <Wrapper>
      {data.map((post) => (
        <PostPreview key={post.id}>
          <Link href={`/posts/${buildPostSlug(post)}`}>
            {formatTitleCase(post.title)}
          </Link>
        </PostPreview>
      ))}
    </Wrapper>
  );
}
