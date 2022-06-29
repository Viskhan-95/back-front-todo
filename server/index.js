const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

mongoose.connect("mongodb+srv://viskhan:dbcbnftd1987@cluster0.mtmj3.mongodb.net/frontentTodos?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
  console.log('Сервер запущен успешно')
})