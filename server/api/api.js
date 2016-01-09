var router = require('express').Router();

// api router will mount other routers for all our resources
// example: route becomes localhost:3000/api/users
router.use('/users', require('./user/userRoutes'));
router.use('/categories', require('./category/categoryRoutes'));
router.use('/posts', require('./post/postRoutes'));

module.exports = router;
