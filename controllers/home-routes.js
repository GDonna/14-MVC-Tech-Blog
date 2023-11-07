const router = require('express').Router();
const {Post, User} = require('../models');


router.get('/blogposts', async (req, res) => {
  const dbblogData = await Post.findAll({}); 
  res.render ('all-posts', {dbblogData});
  });


router.get('/blogposts/:id', async (req, res) => {  
  const dbblogData = await Post.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  }); res.render ('single-post', {dbblogData});
  });
module.exports = router;
