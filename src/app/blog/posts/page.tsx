// import { posts } from "../../lib/placeholder-data";
import Post from "../../ui/components/posts/Post";
import { connectToDB, getPosts } from "@/app/lib/data";

export default async function page() {
  const client = await connectToDB();
  const posts = await getPosts();
  return (
    <>
      {client && <p className="text-green-500">Connected to database</p>}
      <h1>Posts</h1>

      {posts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}
