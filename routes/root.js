const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  //if not support html send json
  if (!req.accepts("html")) {
    res.json({ message: "Welcome to the API" });
  }
  //if support html send html
  else {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  }
});

module.exports = router;
