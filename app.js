const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {
  notFoundError,
  errorHandler,
} = require("./backend/middlewares/errorMiddleware");
const userRouter = require("./backend/routes/users.routes");
const { authRouter } = require("./backend/routes/auth.routes");
const { tweetRouter } = require("./backend/routes/tweets.routes");

const app = express();

const ALLOWED_URLS = ["http://localhost:5173"];
console.log(ALLOWED_URLS);

const corsOptions = {
  origin: ALLOWED_URLS,
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Access-Control-Allow-Private-Network"],
};

app.use(cors(corsOptions));
app.options("*", cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/tweets", tweetRouter);

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use(notFoundError);
app.use(errorHandler);

module.exports = app;
