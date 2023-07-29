const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  userId: String,
  password: String,
});

module.exports = mongoose.model("auth", authSchema);
