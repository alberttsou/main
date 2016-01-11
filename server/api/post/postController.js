var Post = require('./postModel');
//var Bid = require('./bidModel'); // TODO include bid table 
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
  Post.findById(id)
    .populate('author bids')
    .exec()
    .then(function(post) {
      if (!post) {
        next(new Error('No post with that id'));
      } else {
        req.post = post;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Post.find({})
    .populate('author categories bids') // bids'
    .exec()
    .then(function(posts){
      res.json(posts);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var post = req.post;
  res.json(post);
};

exports.put = function(req, res, next) {
  var post = req.post;

  var update = req.body;

  _.merge(post, update, function(a,b){
    if(_.isArray(a)) {
      return a.concat(b);
    }
  });

  post.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
  // can't mutate bid info since bid only
};

exports.post = function(req, res, next) {
  var newpost = req.body;
  // deal with bids infor
  // if there is new bid info then do 
  // _.forEach(newpost, function(bid) {
  //   Bid.create(bid)
  //     .then(function(bid){

  //     }, function(err) {
  //       logger.error(err);
  //       next(err);
  //     });
  // }
  // Bid.create(newpost.)
  Post.create(newpost)
    .then(function(post) {
      res.json(post);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.post.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
