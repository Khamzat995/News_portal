const Comments = require("../models/Comments.model");

module.exports.commentsController = {
  getCommentsId: async (req, res) => {
    const getId = await Comments.findById(req.params.id);
    res.render("home", {
      news: getId,
    });
  },

  createComments: async (req, res) => {
    try {
      const post = await new Comments({
        comment: req.body.comment,
        newsId: req.params.id,
      });
      post.save();
      res.redirect(`/news/${req.params.id}`);
    }
    catch (e) {
      console.log(e.message);
    }
  },

  editComments: async (req, res) => {
    try {
      const patch = await Comments.updateOne(
        { _id: req.params.id },
        { ...req.body }
      );
      patch.save();
      res.json("Коментарий успешно изменен");
    }
    catch (e) {
      console.log(e.message);
    }
  },

  removeComments: async (req, res) => {
    try {
      const goods = await Comments.deleteOne({ _id: req.params.id });
      goods.delete();
      res.json("Коментарий успешно удален");
    }
    catch (e) {
      console.log(e.message);
    }
  },
};

