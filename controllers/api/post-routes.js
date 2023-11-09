const router = require('express').Router();
const Posts = require('../../models/Blogposts');
const withAuth = require('../../utils/auth');

//Creates a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPosts = await Posts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPosts);
  } catch (err) {
    res.status(400).json(err);
  }
});
//Updates a post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatePosts = await Posts.update( req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatePosts) {
      res.status(404).json({ message: 'No matching posts to edit!' });
      return;
    }

    res.status(200).json(updatePosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Deletes a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const deletePost = await Posts.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!deletePost) {
        res.status(404).json({ message: 'No matching posts to edit' });
        return;
      }
  
      res.status(200).json(deletePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
