const contactSchema = require("../model/contact");

const CreateContact = async (req, res) => {
  const { email, phone, resion, message, name } = req.body;
  await contactSchema.create({ email, phone, resion, message, name });
  return res.status(200).json({ success: true, message: "Request sent" });
};

const GetContacts = async (req, res) => {
  const data = (await contactSchema.find({})).reverse();
  return res
    .status(200)
    .json({ success: true, message: "All contacts fetched", data });
};

module.exports = { CreateContact, GetContacts };
