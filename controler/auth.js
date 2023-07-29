const auth = require("../model/auth");

const createAuth = async (req, res) => {
  const { userId, password } = req.body;
  await auth.create({ userId, password });
  return res.status(200).json({ success: true, message: "New auth created" });
};

const matchAuth = async (req, res) => {
  const { userId, password } = req.body;
  let user = await auth.findOne({ userId });
  if (!user) {
    return res.status(401).json({ error: true, message: "Wrong userId" });
  }
  let isCorrectPassword = user.password === password;
  if (!isCorrectPassword) {
    return res.status(401).json({ error: true, message: "Wrong Password" });
  }

  return res
    .status(200)
    .json({ success: true, message: "New auth created", data: user });
};

module.exports = { matchAuth, createAuth };
