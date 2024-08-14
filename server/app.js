const express = require('express');
const {sequelize} = require('./models/index');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRouter = require('./router/TodoRouter');
app.use('/api', todoRouter); // 기본 주소 : localhost:PORT/api

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('*', (_, res) => {
  res.send('404 Error!');
});

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`${PORT}에 연결됨`);
      console.log(`Database connection succeeded!`);
    });
  })
  .catch((err) => {
    console.error(err);
  });