const Category = require("../models/Category");

const getCategory = async (req, res) => {
  const get = await Category.find();
  res.render("home", {
    news: get,
  });
};

const getCategoryId = async (req, res) => {
  const getId = await Category.findById(req.params.id);
  res.render("home", {
    news: getId,
  });
};

const postCategory = async (req, res) => {
  try {
    const post = await new Category({
      name: req.body.name,
    });
    post.save();
    res.json("Категория успешно добавлена");
  } catch (e) {
    console.log(e.message);
  }
};

const patchCategory = async (req, res) => {
  try {
    const patch = await Category.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    await patch.save();
    res.json("Категория успешно изменена");
  } catch (e) {
    console.log(e.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const goods = await Category.findById(req.params.id);
    goods.delete(); // удаление констаты
    res.json("Категория успешно удалена");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getCategory,
  getCategoryId,
  postCategory,
  patchCategory,
  deleteCategory,
};
