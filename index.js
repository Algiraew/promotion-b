const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", true);

app.use(require("./routes/news.router"));
app.use(require("./routes/comment.router"));
app.use(require("./routes/product.route"));

const server = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB, () => {
      console.log("Успешное подключение к БД");
    });
    app.listen(process.env.PORT, () => {
      console.log("Сервер успешно запущен");
    });
  } catch (error) {
    console.log(error.message);
  }
};

server();
