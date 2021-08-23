const News = require("../models/News.model");
const path = require('path');


const postImg = async (req, res) => {
  const image = req.files.image;
  const newFileName = `./public/uploads/img/${Math.random() * 100000}${path.extname(image.name)}`;

  image.mv(newFileName, async (err) => {
    if (err) {
      console.log('Ошибка')
    } else {
      const news = await News.findById(req.params.id);

      news.pathToImg = newFileName;
      await news.save()
      res.json('файл загружен')
    }
  })
}

module.exports = {
  postImg
}

