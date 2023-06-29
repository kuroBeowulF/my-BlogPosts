import Link from "next/link";
import React from "react";
type Props = {
  post: BlogPost;
};
export default function ListItem({ post }: Props) {
  const { id, title, description } = post;
  return (
    <li>
      <Link
        href={`/posts/${id}`}
        className="font-bold text-xl text-white/90 hover:text-white cursor-pointer underline"
      >
        {title}
      </Link>
      <p className="text-slate-300">{description}</p>
    </li>
  );
}
