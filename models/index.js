const User = require('./User');
const blogPostbody = require('./Blogposts');


User.hasMany(blogPostbody, {
  foreignKey: 'gallery_id',
});

blogPostbody.belongsTo(User, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Blogposts };
