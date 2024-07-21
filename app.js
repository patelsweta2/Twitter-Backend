const express = require("express");
const cookieParser = require("cookie-parser");
const constants = require("./constants");
const cors = require("cors");
const { authRouter } = require("./backend/routes/auth.routes");

const app = express();

const corsOptions = {
  origin: constants.ALLOWED_URLS,
  credentials: true,
  method: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Access-Control-Allow-Private-Network"],
};

app.use(cors(corsOptions));
app.options("*", cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

module.exports = app;
