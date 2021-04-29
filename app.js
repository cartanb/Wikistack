const express = require("express");
const morgan = require("morgan");
const path = require("path");
const layout = require("./views/layout");
const { db } = require("./models");
const wiki = require("./routes/wiki");
const users = require("./routes/users");

const app = express();

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wiki);
app.use("/users", users);

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

const init = async () => {
  await db.sync();
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
  });
};

init();
