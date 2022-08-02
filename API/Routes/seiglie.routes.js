const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Catego = require("../Models/Catego");
const Posts = require("../Models/Posts");

router.get("/cat", (req, res) =>
  Catego.findAll()
    .then((api) => {
      //console.log(api);
      res.sendStatus(200);
    })
    .catch((err) => console.log("error: " + err))
);
router.get("/post", (req, res) =>
  Posts.findAll()
    .then((api) => {
      //console.log(api);
      res.sendStatus(200);
    })
    .catch((err) => console.log("error: " + err))
);

module.exports = router;
