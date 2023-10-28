const router = require('express').Router();
const {Blogposts, User} = require('../models');


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
