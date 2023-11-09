const express = require('express');
const { Post, User } = require('../models');
const router = express();

router.get('/', async (req, res) => {

  try {
    // Get all projects and JOIN with user data
    const dbblogData = await Post.findAll({
      include: [User]
    });

    // Serialize data so the template can read it
    const posts = dbblogData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('all-posts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/blogposts/:id', async (req, res) => {

  try {
    // Get a single post by its `id` and JOIN with user data
    const dbblogData = await Post.findByPk({
      include: [User,
        {
          model: Comment,
          include: [User]
        }
      ]
    });
    if (dbblogData) {
      const post = dbblogData.get({ plain: true });
      res.render('single-post', { post });
    }
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('singup');
});
module.exports = router;
