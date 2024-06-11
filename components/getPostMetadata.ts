import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetadata = () : PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));
  
  
    // gray-matter data
    const posts = markdownFiles.map((fileName) => {
      const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
      const matterResult = matter(fileContents);
  
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      }
    });
  
    return posts;
  }

  export default getPostMetadata;