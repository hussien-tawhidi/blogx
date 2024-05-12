import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String,required: true },
    category: { type: String },
    userEmail: { type: String },
    featured: { type: Boolean },
    topPost: { type: Boolean },
  },
  { timestamps: true }
);

const BlogModel = mongoose.models?.Blog || mongoose.model("Blog", BlogSchema);
export default BlogModel;
