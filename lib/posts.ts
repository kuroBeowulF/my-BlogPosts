import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { cache } from "react";

const postDirectory = path.join(process.cwd(), "blogPosts");

export const getPostsData = cache(() => {
  //get file names under /posts
  const fileNames = fs.readdirSync(postDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    //remove .md from file name to get id
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    //read markdown file as string

    const matterResult = matter(fileContents);
    //use gray-matter to parse the post metadata section
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
    };

    return blogPost;
  });

  return allPostData;
});

export async function getPostData(id: string) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileCntent = fs.readFileSync(fullPath, "utf8");
  // use gray-matter to parse post metadata section
  const matterResult = matter(fileCntent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHtml: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    description: matterResult.data.description,
    contentHtml,
  };
  return blogPostWithHtml;
}
