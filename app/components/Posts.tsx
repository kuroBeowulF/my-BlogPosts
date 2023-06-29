import React from "react";
import { getPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const data = getPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <ul className="w-full">
        {data.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
