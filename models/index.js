const User = require('./User');
const Post = require('./Blogposts');
const Comments = require('./Comments');

Post.hasMany(Comments, {
  foreignKey: 'post_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Blogposts };
