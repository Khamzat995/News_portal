const NewsController = require("../models/News.model");
const Category = require("../models/Category.model");
const Comments = require("../models/Comments.model");

module.exports.newsController = {
  allNews: async (req, res) => {
    try {
      const limitValue = req.query.limit || 3;
      const skipValue = req.query.skip || 0;
      const get = await NewsController.find().lean().limit(limitValue).skip(skipValue);
      res.render("home", {
        news: get,
      });
    }
    catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getNewsCat: async (req, res) => {
    const newsCat = await NewsController.find({ categoryId: req.params.id });
    const cat = await Category.find().lean();
    res.render("categories", {
      news: newsCat,
      categories: cat,
    });
  },

  getNewsCategoryById: async (req, res) => {
    try {
      const newByCat = await NewsController.find({ categoryId: req.params.id }).lean();
      res.render("categories", {
        news: newByCat,
      });
    }
    catch (e) {
      console.log(e.message);
    }
  },

  getNewsId: async (req, res) => {
    try {
      const allComments = await Comments.find({ newsId: req.params.id }).lean();
      const newPost = await NewsController.findById(req.params.id).lean();
      console.log(newPost);
      res.render("single-news", {
        post: newPost,
        comments: allComments,
      });
    }
    catch (e) {
      console.log(e.message);
    }
  },

  createNews: async (req, res) => {
    try {
      const post = await new NewsController({
        title: req.body.title,
        text: req.body.text,
        imageURL: req.body.imageURL,
        categoryId: req.body.categoryId,
      });
      await post.save();
      res.json("Новость успешно добавлена");
    }
    catch (e) {
      console.log(e.message);
    }
  },

  editNews: async (req, res) => {
    try {
      const patch = await NewsController.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      await patch.save();
      res.json("Новость успешно изменена");
    }
    catch (e) {
      console.log(e.message);
    }
  },

  removeNews: async (req, res) => {
    try {
      const goods = await NewsController.findById(req.params.id);
      goods.delete();
      res.json("Новость успешно удалена");
    }
    catch (e) {
      console.log(e.message);
    }
  },
};
