import { getPostData, getPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
type Props = {
  params: {
    postId: string;
  };
};

export function generateStaticParams() {
  const data = getPostsData();
  return data.map((post) => {
    id: post.id;
  });
}
export function generateMetadata({ params: { postId } }: Props) {
  const data = getPostsData();
  const post = data.find((post) => post.id === postId);
  if (!post)
    return {
      title: "Post not found",
    };

  return {
    title: `Kurosh's ${postId}`,
    description: "Writed by Kuro",
  };
}

export default async function Post({ params: { postId } }: Props) {
  const data = getPostsData();
  const { title, description, contentHtml } = await getPostData(postId);

  if (!data.find((post) => post.id === postId)) notFound();
  return (
    <main className="mt-6 px-6 prose prose-xl prose-slate dark:prose-invert text-center mx-auto">
      <h1 className="text-3xl">{title}</h1>
      <p>{description}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Link href="/">Back To Home</Link>
      </article>
    </main>
  );
}
