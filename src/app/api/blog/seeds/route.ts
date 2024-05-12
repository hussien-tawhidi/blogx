import { blogData } from "@/constants/blogData";
import { dbConnect } from "@/libs/dbConnect";
import BlogModel from "@/models/BlogModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  await dbConnect();
  await BlogModel.deleteMany();
  await BlogModel.insertMany(blogData);

  // return NextResponse.json("Hello")

  return NextResponse.json({
    message: "seed successfully",

    blogData,
  });
};
