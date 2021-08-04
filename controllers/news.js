const News = require("../models/News");
const Category = require("../models/Category");
const Comments = require("../models/Comments");

const getNews = async (req, res) => {
  const get = await News.find().lean();
  const cat = await Category.find().lean();
  res.render("home", {
    news: get,
    categories: cat,
  });
};

const getNewsCat = async (req, res) => {
  const newsCat = await News.find({ categoryId: req.params.id });
  const cat = await Category.find().lean();
  res.render("categories", {
    news: newsCat,
    categories: cat,
  });
};

const getNewsCategoryById = async (req, res) => {
  try {
    const newByCat = await News.find({ categoryId: req.params.id }).lean();
    res.render("categories", {
      news: newByCat,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const getNewsId = async (req, res) => {
  try {
    const allComments = await Comments.find({
      newsId: req.params.id,
    }).lean();
    const newPost = await News.findById(req.params.id).lean();
    console.log(newPost);
    res.render("single-news", {
      post: newPost,
      comments: allComments,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const postNews = async (req, res) => {
  try {
    const post = await new News({
      title: req.body.title,
      text: req.body.text,
      imageURL: req.body.imageURL,
      categoryId: req.body.categoryId,
    });
    await post.save();
    res.json("Новость успешно добавлена");
  } catch (e) {
    console.log(e.message);
  }
};

const patchNews = async (req, res) => {
  try {
    const patch = await News.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    await patch.save();
    res.json("Новость успешно изменена");
  } catch (e) {
    console.log(e.message);
  }
};

const deleteNews = async (req, res) => {
  try {
    const goods = await News.findById(req.params.id);
    goods.delete();
    res.json("Новость успешно удалена");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getNews,
  getNewsId,
  getNewsCat,
  postNews,
  patchNews,
  deleteNews,
  getNewsCategoryById,
};
