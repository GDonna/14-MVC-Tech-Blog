const User = require('./User');
const Blogposts = require('./Blogposts');
const Comments = require('./Comments');

Blogposts.hasMany(Comments, {
  foreignKey: 'Blogposts_id',
});

Blogposts.belongsTo(User, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = {User, Blogposts, Comments};
