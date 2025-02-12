import { createClient } from "@vercel/postgres";
import { sql } from "@vercel/postgres";

export async function connectToDB() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log("%cConnected to the database", "color : green");
      return client;
    }
  } catch (error) {
    console.error("error connecting to DataBase", error);
  }
}

export async function getPosts() {
  try {
    const data = await sql`SELECT * FROM posts`;
    // console.log(data.rows);
    return data.rows;
  } catch (error) {
    console.error("error getting posts", error);
  }
}
