const router = require('express').Router();
const {Blogposts, User} = require('../models');

// GET all galleries for homepage
router.get('/Blogposts/:id', async (req, res) => {
  const dbblogData = await Blogposts.findAll({
    include: [
      {
        model: blogposts,
        attributes: ['filename', 'description'],
      },
    ],
  });
  },
  );
  
  
module.exports = router;
