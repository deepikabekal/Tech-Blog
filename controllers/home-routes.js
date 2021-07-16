const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post } = require("../models");

// router.get("/", (req, res) => {
//   Post.findAll({}).then((dbPostData) => {
//     const posts = dbPostData.map((post) => post.get({ plain: true }));
//     res.render("homepage", { posts, loggedIn: req.session.loggedIn });
//   });
// });

router.get( '/',  (req, res ) => {
  Post.findAll( {
      attributes: [ 
          'id', 
          'title',
          'content', 
          'created_at',
          'updated_at',
          [ sequelize.literal( '(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)' ), 'num_comments' ],
          [ sequelize.literal( '(SELECT MAX(created_at) FROM comment WHERE post.id = comment.post_id)' ), 'recent_post' ]       
      ],
      include: [
          {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
              model: User,
              attributes: ['username']
          }
      ],
      order: [ [ 'updated_at', 'DESC' ] ],
  } )
  .then( dbPostData => {
      const posts = dbPostData.map( post => post.get( { plain: true } ) )
      res.render( 'homepage', { 
          posts,
          loggedIn: req.session.loggedIn
      } )
  } )
  .catch( err => {
      console.log( err );
      res.status( 500 ).json( err );
  } );
} );

router.get( '/post/:id', (req, res ) => {
  Post.findOne( {
      where: {
          id: req.params.id
      },
      attributes: [ 
          'id', 
          'title',
          'content', 
          'created_at',
          'updated_at',
          [ sequelize.literal( '(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)' ), 'num_comments' ],
          [ sequelize.literal( '(SELECT MAX(created_at) FROM comment WHERE post.id = comment.post_id)' ), 'recent_post' ]       
      ],
      include: [
          {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
              model: User,
              attributes: ['username']
          }
      ]
  } )
  .then( dbPostData => {
      if( !dbPostData ) {
          res.status( 404 ).json( { message: 'No post found with this id' } )
          return
      }
      const post = dbPostData.get( { plain: true } )
      res.render( 'single-post',  { 
          post,
          loggedIn: req.session.loggedIn
       } )
  } )
  .catch( err => {
      console.log( err )
      res.status( 500 ).json( err )
  } )
} );

router.get( '/edit/:id', (req, res ) => {
  Post.findOne( {
      where: {
          id: req.params.id
      },
      attributes: [ 
          'id', 
          'title',
          'content', 
          'created_at'     
      ]
  } )
  .then( dbPostData => {
      if( !dbPostData ) {
          res.status( 404 ).json( { message: 'No post found with this id' } )
          return
      }
      console.log( dbPostData )
      const post = dbPostData.get( { plain: true } )
      res.render( 'edit-post',  { 
          post,
          loggedIn: req.session.loggedIn
       } )
  } )
  .catch( err => {
      console.log( err )
      res.status( 500 ).json( err )
  } )
} );

router.get("/login", (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signup", (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
});

router.get("/dashboard", (req, res) => {
  Post.findAll({}).then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
  });
});

router.get("/dashboard/new", (req, res) => {
  res.render("newpost", { loggedIn: req.session.loggedIn });
});

// router.get("/posts/:id", (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbPostsData) => {
//       if (!dbPostsData) {
//         res.status(404).json({ message: "No post found with this id" });
//         return;
//       }
//       const post = dbPostsData.get({ plain: true });
//       res.render("post", { post, loggedIn: req.session.loggedIn });
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
