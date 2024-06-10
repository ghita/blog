import fs from "fs";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownFiles.map((file) => file.replace(".md", ""));
  return slugs;
}

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => 
    <div>
      <h2>{slug}</h2>
    </div>
  );

  return <div>{postPreviews}</div>
}

export default HomePage;