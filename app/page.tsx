
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Link from "next/link";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => 
    <PostPreview  key={post.slug} {...post} />
  );

  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
}

export default HomePage;