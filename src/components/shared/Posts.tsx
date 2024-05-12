"use client";

import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";
import { useState } from "react";
import Button from "../ui/Button";

const Posts = () => {
  const [visibleBlog, setVisibleBlog] = useState(5);

  const showMoreBlog = () => {
    setVisibleBlog((prev) => prev + 3);
  };

  return (
    <section className='col-span-2' aria-labelledby='latest-posts'>
      <div className='w-full text-center'>
        <h2
          id='latest-post'
          className='text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10'>
          Posts
        </h2>
      </div>
      <div className='flex flex-col gap-10 h-full'>
        {blogData.slice(0, visibleBlog).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
        {visibleBlog < blogData.length && (
          <div className='flex justify-center'>
            <Button
              text='Show more...'
              onClick={showMoreBlog}
              aria='show more blog'
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Posts;
