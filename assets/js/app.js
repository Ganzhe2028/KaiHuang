const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
//添加cors安全支持
const cors = require('cors');
app.use(cors());
// 解析application/json
app.use(bodyParser.json());

//查询服务器是否正常启动
app.get('/', (req, res) => {
    res.send('Express服务器正常运行！');
});

// 数据库连接配置
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // 更换为你的数据库用户名
    password: '123456', // 更换为你的数据库密码
    database: 'user_management'
});

// 连接数据库
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

// 注册路由
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) throw err;
        res.send('User registered successfully');
    });
});

// 登录路由
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const comparison = await bcrypt.compare(password, results[0].password);
            if (comparison) {
                res.send('Login successful');
            } else {
                res.send('Wrong username or password');
            }
        } else {
            res.send('Wrong username or password');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
