import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <header className="bg-slate-900 text-white py-10 text-center rounded-md mb-5">
      <Link href="/" className="text-4xl font-bold">
        Static's Blogs
      </Link>
    </header>
  );
};

export default header;
