const router = require('express').Router();
const {Post} = require('../../models');

// GET /api/posts
router.get('/', (req, res) => {
    Post.findAll({
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;