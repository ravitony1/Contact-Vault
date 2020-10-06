const express = require("express");
const router = express.Router();

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private

router.get("/", (req, res) => {
  res.send();
});

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private

router.post("/", (req, res) => {
  res.send();
});

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private

router.put("/", (req, res) => {
  res.send();
});

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private

router.delete("/", (req, res) => {
  res.send();
});

module.exports = router;