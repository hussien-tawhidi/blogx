"use client";

import BlogCard from "@/components/shared/BlogCard";
import Posts from "@/components/shared/Posts";
import TopPosts from "@/components/shared/TopPosts";
import { useState } from "react";

const PostsPage = () => {
  const [visibleBlog, setVisibleBlog] = useState(5);

  const showMoreBlog = () => {
    setVisibleBlog((prev) => prev + 3);
  };

  return (
      <div className='grid lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10 max-lg:space-y-7'>
          <Posts/>
      <TopPosts />
    </div>
  );
};

export default PostsPage;
