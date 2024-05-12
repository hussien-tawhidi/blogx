"use client";

import { blogDataProps } from "@/types";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";
import Link from "next/link";

interface Props {
  post: blogDataProps;
  index: any;
}

const BlogCard = ({ post }: any) => {
  return (
    <Link href={{ pathname: `/blog/${post.id}`, query: { ...post } }}>
      <article className='relative rounded-lg overflow-hidden'>
        <div className='w-[1000px] h-[450px] relative'>
          <Image
            src={post.image_path}
            alt={post.title}
            fill
            className='object-cover'
          />
          <Overlay />
        </div>
        <div className='absolute w-full h-full top-0 p-5 flex flex-col justify-between'>
          <div>
            <Tag text={post?.tags} />
            <h3 className='text-3xl font-extrabold text-white'>{post.title}</h3>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
