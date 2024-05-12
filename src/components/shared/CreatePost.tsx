/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEdgeStore } from "@/libs/edgestore";
import { useEffect, useState } from "react";
import Input from "../auth/Input";
import { SingleImageDropzone } from "../ui/SingleImageDropZone";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateForm = ({ user }: any) => {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [imagePath, setImagePath] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const uploadImageHandler = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      setImagePath(res?.url);
    }
  };

  useEffect(() => {
    if (file) {
      uploadImageHandler();
    }
  }, [file, uploadImageHandler]);

  const createPostHandle = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          category,
          img: imagePath,
        }),
      });
      if (res.ok) {
        toast.success("Successfully");
        router.push("/");
      } else {
        toast.error("Failed to register");
      }
    } catch (error: any) {
      toast.error(error.message || error);
    }
  };

  return (
    <div className='mt-8 mx-auto w-full max-w-3xl px-4'>
      <div className=' py-8 shadow rounded-lg px-10'>
        <h1 className='text-center text-2xl font-extrabold mb-10'>
          Create a Post ✍️
        </h1>
        {/* <UploadImage/> */}
        {!user ? (
          <h2 className='text-center text-xl font-extrabold uppercase'>
            Please Sign up or Log in to create a post!
          </h2>
        ) : (
          <>
            <SingleImageDropzone
              onChange={(file) => {
                setFile(file);
              }}
              width={200}
              height={200}
              value={file}
            />
            <form onSubmit={createPostHandle} className='flex flex-col gap-3'>
              <Input
                value={imagePath}
                name='image'
                placeholder='Blog Category'
                type='hidden'
                label=''
              />
              <Input
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
                name='title'
                placeholder='Blog Title'
                type='string'
                label='Blog Title'
              />
              <Input
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                name='description'
                placeholder='Blog Description'
                type='string'
                label='Blog Description'
              />
              <Input
                value={category}
                onChange={(e: any) => setCategory(e.target.value)}
                name='category'
                placeholder='Blog Category'
                type='string'
                label='Blog Category'
              />

              <button type='submit'>Sent</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateForm;
