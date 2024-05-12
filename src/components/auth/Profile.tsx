"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {}

const Profile = ({ email, session }: any) => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const userEmail = email;
  const filterPosts = posts.filter((post: any) => post.userEmail === userEmail);
  console.log(filterPosts);
  const fetchData = async () => {
    const res = await axios.get("/api/blog");
    setPosts(res?.data.blog);
  };

  useEffect(() => {
    if (!session) {
      router.push("/sign-in");
    }
    fetchData();
  }, [router, session]);

  return (
    <div className='w-full'>
      {filterPosts.length > 0 && (
        <div className='flex flex-col max-w-[90%] mx-auto'>
          <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
              <div className='overflow-hidden'>
                <table className='min-w-full text-left text-sm font-light text-surface dark:text-white'>
                  <thead className='border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark'>
                    <tr>
                      <th scope='col' className='px-6 py-4'>
                        Image
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Title
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        Category
                      </th>
                      <th scope='col' className='px-6 py-4'>
                        User Email
                      </th>
                    </tr>
                  </thead>
                  {filterPosts?.map((post: any, index) => (
                    <tbody key={index}>
                      <tr className='border-b border-neutral-200 bg-black/[0.02] dark:border-white/10'>
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>
                          <Image
                            src={post.img}
                            alt={post.title}
                            width={100}
                            height={100}
                            className='object-cover rounded-full'
                          />
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {post.title}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {post.category}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {post.userEmail}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
