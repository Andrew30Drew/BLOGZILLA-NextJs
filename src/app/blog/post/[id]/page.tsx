import { posts } from "../../../lib/placeholder-data";
import Post from "../../../ui/components/posts/Post";

// Define the type for params
interface PageParams {
  id: string;
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  // Await the params promise
  const resolvedParams = await params;
  const post = posts.find((post) => post.id === resolvedParams.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}
