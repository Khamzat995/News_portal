const express = require("express");
const fileUpload = require('express-fileupload');
const hbs = require("express-handlebars");
const chalk = require("chalk");
const boxen = require("boxen");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "handlebars");
app.engine("handlebars", hbs());

mongoose.connect(
  "mongodb+srv://khamzat:12345@cluster0.aa1ma.mongodb.net/newsPortal",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
console.log(
  boxen(chalk.bold.green("Подключился к Mongodb"), {
    borderColor: "yellowBright",
    borderStyle: "round",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(require("./routes/index"));

app.listen(3050, () => {
  console.log(
    boxen(chalk.bold.green("SNN подключен"), {
      borderColor: "yellowBright",
      borderStyle: "round",
    })
  );
});
