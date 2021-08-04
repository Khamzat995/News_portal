const Comments = require("../models/Comments");

const getCommentsId = async (req, res) => {
  const getId = await Comments.findById(req.params.id);
  res.render("home", {
    news: getId,
  });
};

const postComments = async (req, res) => {
  try {
    const post = await new Comments({
      comment: req.body.comment,
      newsId: req.params.id,
    });
    post.save();
    res.redirect(`/news/${req.params.id}`);
  } catch (e) {
    console.log(e.message);
  }
};

const patchComments = async (req, res) => {
  try {
    const patch = await Comments.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    patch.save();
    res.json("Коментарий успешно изменен");
  } catch (e) {
    console.log(e.message);
  }
};

const deleteComments = async (req, res) => {
  try {
    const goods = await Comments.deleteOne({ _id: req.params.id });
    goods.delete();
    res.json("Коментарий успешно удален");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getCommentsId,
  postComments,
  patchComments,
  deleteComments,
};
