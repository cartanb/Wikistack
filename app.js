const express = require('express');
const morgan = require('morgan');
const path = require('path');
const layout = require('./views/layout');
const { db, User, Page } = require('./models');

const app = express();

db.authenticate().then(() => {
  console.log('connected to the database');
});

await db.sync();
await User.sync();
await Page.sync();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send(layout(''));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
