"use client";

import Tag from "@/components/ui/Tag";
import { blogDataProps } from "@/types";
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

interface props {
  searchParams: blogDataProps;
}

const BlogSingle = ({ searchParams }: props) => {
  const post = searchParams;
   return (
     <div className='w-[95%] mx-auto max-w-[1450px]'>
       <div className='w-full h-[400px] relative mb-5'>
         <Image
           fill
           alt='image for blog'
           src={post.image_path}
           className='object-cover'
         />
       </div>

       <Tag text={post.tags} />
       <h2 className='text-4xl font-extrabold uppercase text-tertiary my-3'>
         {post.title}
       </h2>

       <div className='flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col'>
         <aside
           className='md:sticky
        md:top-3/4 md:h-screen
        '>
           <span className='uppercase text-2xl font-extrabold text-tertiary'>
             Share:
           </span>
           <div className='flex text-3xl gap-5 text-gray-400 mt-2 [&>*]:border'>
             <AiOutlineFacebook />
             <AiOutlineInstagram />
             <AiOutlineTwitter />
           </div>
         </aside>

         <article>
           <p className='text-xl'>{post.paragraph}</p>

           <div className='mt-5 flex gap-5 items-center'>
             <Image
               //  src={post.user.image}
               src=""
               width={500}
               height={500}
               alt={`Image of ${post.authorName}`}
               className='rounded-full w-20 h-20 object-cover'
             />
             <div className='flex gap-1 flex-col'>
               {/* <span>{post.user.name}</span>
               <span>{formatDate(post.createdAt)}</span> */}
             </div>
           </div>
         </article>
       </div>
     </div>
   );
};

export default BlogSingle;
