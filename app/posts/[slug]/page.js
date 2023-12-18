import Markdown from "markdown-to-jsx";
import getPostContent from "@/components/getPostContent";

const page = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default page;
