import { auth } from "@/auth";
import { dbConnect } from "@/libs/dbConnect";
import BlogModel from "@/models/BlogModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const user = await auth();
  if (!user) {
    return NextResponse.json({
      status: 401,
      body: JSON.stringify({
        message: "You must be signed in to create a blog",
        success: false,
      }),
    });
  }
  try {
    const body = await request.json();
    const { title, description, category, img } = body;

    const savedBlog = await BlogModel.create({
      title,
      description,
      category,
      img,
      userEmail: user?.user?.email,
    });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedBlog,
    });
  } catch (err) {
    console.log(err);
  }
}
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const blog = await BlogModel.find();
    return Response.json({ blog });
  } catch (err) {
    console.log(err);
  }
}
