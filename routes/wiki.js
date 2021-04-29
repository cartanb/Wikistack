const router = require('express').Router();
const { Page } = require('../models');
const addPage = require('../views/addPage');
const wikipage = require('../views/wikipage');

// get /wiki
router.get('/', (req, res, next) => {
  res.send('whatever');
});

// post /wiki
router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.status(201).redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

//get /wiki/add
router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  //   res.send(`hit dynamic route at ${req.params.slug}`);
  const findPage = await Page.findAll({
    where: { slug: req.params.slug },
  });
  res.send(wikipage(findPage[0]));
});

module.exports = router;
