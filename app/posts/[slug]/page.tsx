import fs from 'fs';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content;
};


const PostPage = ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    const content = getPostContent(slug);
    return (
     <p>
        <h1>This is post for: {slug}</h1>
        <p>{content}</p>
     </p>
    );
};

export default PostPage;