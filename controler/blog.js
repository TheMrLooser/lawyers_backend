const blogSchema = require("../model/blogs");

const CreateBlog = async (req, res, next) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(404).json({
      error: true,
      message: "Title and Body  required",
    });
  }
  await blogSchema.create({ body, title });
  return res
    .status(200)
    .json({ success: true, message: "Blog created successfully." });
};

const GetAllBlogs = async (req, res, next) => {
  const blogs = await blogSchema.find({});
  return res
    .status(200)
    .json({ success: true, message: "Blog fetched successfully", data: blogs });
};

const GetSingleBlog = async (req, res, next) => {
  const { blogId } = req.params;

  if (!blogId) {
    return res.status(400).json({
      error: true,
      message: "Blog Id is required",
    });
  }
  const blog = await blogSchema.findById(blogId);
  if (!blog) {
    return res.status(404).json({
      error: true,
      message: "Invalid blog id",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Blog detail fetched successfully",
    data: blog,
  });
};

const DeleteBlog = async (req, res, next) => {
  const { blogId } = req.params;
  if (!blogId) {
    return res.status(400).json({
      error: true,
      message: "Blog Id is required",
    });
  }
  let blog = await blogSchema.findByIdAndDelete(blogId);
  if (!blog) {
    return res.status(404).json({
      error: true,
      message: "Invalid blog id",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
  });
};

module.exports = { GetAllBlogs, GetSingleBlog, CreateBlog, DeleteBlog };
