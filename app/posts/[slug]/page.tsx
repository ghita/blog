import getPostMetadata from "@/components/getPostMetadata";
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    const paths = posts.map((post) => (
        {slug: post.slug}
    ));
    return paths
}

const PostPage = ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    const post = getPostContent(slug);
    return (
     <div>
        <h1 className="text-2x1 text-violet-600">{post.data.title}</h1>
        <article className="prose lg:prose-x1">
            <Markdown>{post.content}</Markdown>
        </article>
     </div>
    );
};

export default PostPage;
