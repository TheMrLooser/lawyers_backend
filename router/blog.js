const express = require("express");
const {
  CreateBlog,
  GetAllBlogs,
  GetSingleBlog,
  DeleteBlog,
} = require("../controler/blog");
const { wrapRequestHendler } = require("../utils");

const blogRouter = express.Router();

blogRouter.post("/post-blog", wrapRequestHendler(CreateBlog));
blogRouter.get("/get-all-blogs", wrapRequestHendler(GetAllBlogs));
blogRouter.get("/get-single-blog/:blogId", wrapRequestHendler(GetSingleBlog));
blogRouter.delete("/delete-blog/:blogId", wrapRequestHendler(DeleteBlog));

module.exports = blogRouter;
