const {Post} = require("../models");

const postdata = [
  {
    title: "What is MVC?",
    content: "The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.",
  },
];

const seedPosts = () => {
    Post.bulkCreate(postdata);
}
module.exports = seedPosts;