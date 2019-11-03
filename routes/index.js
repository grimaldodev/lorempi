var users = require('../routes/_users');
var posts = require('../routes/_posts');
var comments = require('../routes/_comments');

module.exports = {
    users: users(),
    posts: posts(),
    comments: comments()
}