const router = require('express').Router();
const {Blogposts, User} = require('../models');

// GET all galleries for homepage
router.get('/gallery/:id', async (req, res) => {
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
  


// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', {
      painting,
      // We are not incrementing the 'countVisit' session variable here
      // but simply sending over the current 'countVisit' session variable to be rendered
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
module.exports = router;
