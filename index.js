const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const connectDB = require("./DB");
const { contactRouter } = require("./router/contact");
const { HttpError } = require("./utils/error");
const blogRouter = require("./router/blog");
const authRouter = require("./router/auth");

dotenv.config({ path: ".env" });
const app = express();

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3000","https://legalmindsinternational.com"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    credentials: true,
    maxAge: 600,
    exposedHeaders: ["*", "Authorization"],
  })
);

app.use("/user", contactRouter);
app.use("/blog", blogRouter);
app.use("/auth", authRouter);

app.use(() => {
  const error = new HttpError(
    "This route does not exist, Please check url.",
    404
  );
  throw error;
});

app.use(function (err, req, res, next) {
  return res.json({ message: err.message, type: "error" });
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
