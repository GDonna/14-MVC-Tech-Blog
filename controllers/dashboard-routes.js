const express = require('express');
const { Blogposts, User, Comments } = require('../models');
const router = express();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

  try {
    const dbblogData = await Blogposts.findAll({
      where: {
        userId: req.session.userId
      },
    });
    const posts = dbblogData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {layout: "dashboard", posts });
  } catch (err) {
    res.redirect('login');

  }

});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
      layout: 'dashboard',
    });
  });


router.get('edit/:id', withAuth, async (req, res) => {

  try {
    const dbblogData = await Post.findByPk(req.params.id,);

    if (dbblogData) {
    const post = dbblogData.get({ plain: true });

    res.render('edit-post', { layout: "dashboard", post });}
  } catch (err) {
    res.status(500).json(err);
  }

});