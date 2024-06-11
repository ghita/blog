
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => 
    <div key={index}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  );

  return <div>{postPreviews}</div>
}

export default HomePage;