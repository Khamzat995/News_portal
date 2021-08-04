const News = require("../models/News");
const path = require('path');

const postImg = async (req, res) => {
  const file = req.file.image;
  const fileName = file.name;
  const url = path.resolve(__dirname, "/public/uploads/img" + fileName);
  const urlForDB = "/uploads/img/" + fileName;
  console.log(url);
  file.mv(url, (e) => {
    if (e) {
      res.send(e);
    } else {
      console.log(file)
      res.json('картинка добавлена');
    }
  });

  const news = await News.findByIdAndUpdate(req.params.id, {
    img: urlForDB
  });
  news.save();
  res.json('ok');
}



module.exports = {
  postImg
}

