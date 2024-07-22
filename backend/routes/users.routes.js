const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getCurrUserProfileController,
  getUserByIdController,
  getUserByNameController,
  unFollowUserController,
  followUserController,
  deleteUserController,
  searchUserByNameController,
} = require("../controllers/users.controllers");

const userRouter = express.Router();

userRouter.use(authMiddleware);

userRouter.route("/all").get(getAllUsersController);
userRouter.route("/user/:userId").get(getUserByIdController);
userRouter.route("/profile").get(getCurrUserProfileController);
userRouter.route("/profile/:userName").get(getUserByNameController);
userRouter.route("/delete/:userId").delete(deleteUserController);
userRouter.route("/search/:userName").get(searchUserByNameController);
userRouter.route("/handle-follow").patch(followUserController);
userRouter.route("/handle-unfollow").patch(unFollowUserController);

module.exports = userRouter;
