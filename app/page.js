import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post, index) => {
    return (
      <Link
        key={index}
        href={`/posts/${post.slug}`}
        className="p-5 border border-gray-300 shadow-lg rounded-md text-black"
      >
        <h1 className="text-xl font-bold py-2">{post.title}</h1>
        <p>{post.date}</p>
        <p>{post.subtitle}</p>
      </Link>
    );
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {postPreview}
    </div>
  );
}
