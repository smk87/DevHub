const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Post model
const Post = require("../../models/Post");

//Validation
const ValidationPostInput = require("../../validation/post.js");

// @route    GET api/posts/test
// @desc     Tests posts route
// @access   Public
router.get("/test", (req, res) => res.json({ msg: "Posts works." }));

// @route    GET api/posts
// @desc     Get posts
// @access   Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: "No posts found." }));
});

// @route    GET api/posts/:id
// @desc     Get posts by id
// @access   Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that id." })
    );
});

// @route    GET api/posts
// @desc     Create Post
// @access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { erros, isValid } = ValidationPostInput(req.body);

    //Check validation
    if (!isValid) {
      //If any errors, send 400 with erros object
      return res.status(400).json(erros);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
