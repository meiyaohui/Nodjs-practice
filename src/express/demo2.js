var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('NodeJs主页');
});

app.get('/listuser', function(req, res) {
    res.send('用户列表页面');
});

app.get('/deluser', function(req, res) {
    console.log("删除用户 deluser参数值：" + req.query.userid);
    res.send('删除用户');
});


var server = app.listen('8000', function(req, res) {
    console.log("正在访问http://127.0.0.1:8000");
});