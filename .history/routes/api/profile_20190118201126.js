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
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id }) //req.user DB er User collection theke ekta user or row return kortese
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user.";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route    POST api/profile
// @desc     Create user's profile
// @access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.compnay;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;
    //Skill- Split into array
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.spilt(",");
    }
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.handle) profileFields.handle = req.body.handle;
  }
);

module.exports = router;
