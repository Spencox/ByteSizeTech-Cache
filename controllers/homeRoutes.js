const router = require('express').Router();
const { Posts, Users, Comments } = require('../models');

const withAuth = require('../utils/auth');

// view homepage without login
router.get('/', async (req, res) => {
  try{
    const postData = await Posts.findAll({
      include: [{
        model: Users,
        attributes: ['username']
      }]
    })
    
    const posts = postData.map((post) => post.get({ plain: true}))

    res.render('landing', {
      posts,
      logged_in: req.session.logged_in,
      title: 'Welcome to BSTC',
      style: 'homepage.css'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// view homepage without login
router.get('/homepage', withAuth, async (req, res) => {
  try{
    const postData = await Posts.findAll({
      include: [{
        model: Users,
        attributes: ['username']
      }]
    })
    
    const posts = postData.map((post) => post.get({ plain: true}))

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      title: 'Welcome to BSTC',
      style: 'homepage.css'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// view user dashboard page with user data
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userPostData = await Posts.findAll({
      where: {user_id: req.session.user_id},
      include: [{
        model: Users,
        attributes: ['username']
      }]
    })
    
    console.log(userPostData);

    const userPosts = userPostData.map((post) => post.get({ plain: true}))

    console.log(userPosts);

    res.render('dashboard', {
      userPosts,
      logged_in: req.session.logged_in,
      //title: `${userPosts[0].user.username}'s Dashboard`,
      style: 'dashboard.css'
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


// view login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }
  res.render('login', {
    title: 'User Login',
    style: 'login.css'
  });
});


// view sign up page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup', {
    title: 'Sign Up for BBB',
    style: 'signup.css'
  });
});

module.exports = router;
