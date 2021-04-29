const router = require("express").Router();
const addPage = require("../views/addPage");

// get /wiki
router.get("/", (req, res, next) => {
  res.send("whatever");
});

// post /wiki
router.post("/", () => {});

//get /wiki/add
router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
