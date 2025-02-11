import { posts } from "../../lib/placeholder-data";
import Post from "../../ui/components/posts/Post";

export default function page() {
  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
}
