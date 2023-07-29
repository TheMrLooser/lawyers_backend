const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
