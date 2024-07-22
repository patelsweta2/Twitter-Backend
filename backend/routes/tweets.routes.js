const express = require("express");
const {
  getTweetsAllController,
  getAllTweetsController,
  getTweetById,
  createTweetController,
  updateTweetController,
  likeTweetController,
  saveTweetController,
  getSavedTweetsController,
  deleteTweetController,
} = require("../controllers/tweets.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");
const tweetRouter = express.Router();

tweetRouter.use(authMiddleware);

tweetRouter.route("/create").post(createTweetController);
tweetRouter.route("/tweets").get(getTweetsAllController);
tweetRouter.route("/all").get(getAllTweetsController);
tweetRouter.route("/all/:tweetId").get(getTweetById);
tweetRouter.route("/update/:tweetId").patch(updateTweetController);
tweetRouter.route("/like/:tweetId").patch(likeTweetController);
tweetRouter.route("/save/:tweetId").patch(saveTweetController);
tweetRouter.route("/saved/all").get(getSavedTweetsController);
tweetRouter.route("/delete/:tweetId").delete(deleteTweetController);

module.exports = { tweetRouter };
