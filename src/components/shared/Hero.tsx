"use client";

import { blogData } from "@/constants/blogData";
import Tag from "../ui/Tag";
import Image from "next/image";
import Overlay from "../ui/Overlay";
import Link from "next/link";

const Hero = () => {
  const featuredPosts = blogData.filter((blog) => blog.featured === true);
  const topFeatured = featuredPosts.slice(0, 1);
  const bottomFeatured = featuredPosts.slice(1, 4);

  return (
    <section className='relative '>
      <div className='w-[95%] mx-auto max-w-[1450px] z-1'>
        {topFeatured.map((post) => (
          <article
            key={post.id}
            className='flex flex-col gap-5 mb-5 text-center relative'>
            <Tag text={post.tags} />
            <h2 className='text-6xl font-extrabold uppercase text-tertiary'>
              {post.title}
            </h2>
            <div className='flex items-center gap-3 font-light text-tertiary justify-center'>
              <div className='w-10 h-10 rounded-full bg-black'></div>
              <span>{post.authorName}</span>
              <span className='italic'>{post.publishDate}</span>
            </div>
            <Link href={{ pathname: `/blog/${post.id}`, query: { ...post } }}>
              <div className='relative max-h-[600px] overflow-hidden shadow-xl'>
                <Image
                  src={post.image_path}
                  alt={post.title}
                  width={1000}
                  height={500}
                  className='object-cover w-full h-full'
                />
                <Overlay />
              </div>
            </Link>
          </article>
        ))}
        <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
          {bottomFeatured.map((post) => (
            <article
              key={post.id}
              className='flex flex-col gap-3 items-center text-center relative'>
              <div className='relative overflow-hidden h-72 shadow-xl w-full'>
                <Link
                  href={{
                    pathname: `/blog/${post.id}`,
                    query: { ...post },
                  }}>
                  <Image
                    src={post.image_path}
                    alt={post.title}
                    width={1000}
                    height={500}
                    className='object-cover w-full h-full'
                  />
                  <Overlay />
                </Link>
              </div>
              <Tag text={post.tags} />
              <h3 className='font-extrabold uppercase text-tertiary px-5'>
                {post.title}
              </h3>
              <span className='font-light italic'>{post.publishDate}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
