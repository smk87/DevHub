const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Profile Model
const Profile = require("../../models/Profile");
//Load User Model
const User = require("../../models/User");

// @route    GET api/profile/test
// @desc     Tests profile route
// @access   Public
router.get("/test", (req, res) => res.json({ msg: "Profile works." }));

// @route    GET api/profile
// @desc     Get current user's profile
// @access   Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }, (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id });
  })
);

module.exports = router;
