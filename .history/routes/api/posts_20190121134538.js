const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/post");

// @route    GET api/posts/test
// @desc     Tests posts route
// @access   Public
router.get("/test", (req, res) => res.json({ msg: "Posts works." }));

// @route    GET api/posts
// @desc     Create Post
// @access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newPost = {};
  }
);

module.exports = router;
