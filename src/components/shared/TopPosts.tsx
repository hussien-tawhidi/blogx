"use client";

import { blogData } from "@/constants/blogData";
import { useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";

const TopPosts = () => {
  const [visibleBlog, setVisibleBlog] = useState(3);

  const showMoreBlog = () => {
    setVisibleBlog((prev) => prev + 3);
  };
  const topPosts = blogData.filter((post) => post.topPost == true);
  return (
    <section className='' aria-labelledby='latest-posts'>
      <div className='w-full text-center'>
        <h2
          id='top-post'
          className='text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10'>
          Top Posts
        </h2>
      </div>
      <div className='flex flex-col gap-12 h-full'>
        {topPosts.slice(0, visibleBlog).map((post) => (
          <article className='relative cursor-pointer' key={post.id}>
            <Link
              href={{
                pathname: `/blog/${post.id}`,
                query: { ...post },
              }}>
              <div className='relative'>
                <Image
                  src={post.image_path}
                  alt={post.title}
                  width={800}
                  height={800}
                  className='object-cover'
                />
                <Overlay />
              </div>
            </Link>
            <div className='w-full flex justify-center'>
              <Tag text={post.tags} />
            </div>
            <h3 className='font-extrabold uppercase text-tertiary text-center'>
              {post.title}
            </h3>
            <div className='flex gap-3 justify-center mt-2'>
              <span className='font-light'>By: {post.authorName}</span>
              <span className='italic'>{post.publishDate}</span>
            </div>
          </article>
        ))}
        {visibleBlog < topPosts.length && (
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

export default TopPosts;
