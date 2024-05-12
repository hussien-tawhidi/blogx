"use server"

import BlogModel from "@/models/BlogModel"

export const getAllPost = async () => {
    return await BlogModel.find()
}