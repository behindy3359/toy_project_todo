const express = require('express');
const {sequelize} = require('./models/index');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors()); // 모든 서버에서 보내는 요청을 수락하겠다!
// Cors 의 사용
// 모든 출처에서의 요청을 허용
// 특정출처에서의 요청만 허용.
// 특셩 옵션을 설정

// app.use(cors({
//   origin : ['http://ex.com', 'http://ex2.com'],
//   methods: ['Get','Post'],
//   allowedHeaders : ['Content-Type','Authorization']
// }))


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