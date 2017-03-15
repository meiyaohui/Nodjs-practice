var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

var multer = require('multer');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(urlencodedParser);
app.use(multer({ dest: __dirname + "/temp/" }).array('dd'));

app.post('/file_upload', function(req, res) {
    console.log("上传文件的信息：" + req.files[0].originalname);

    //重新写份文件
    var des_file = __dirname + "/temp/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: "File upload successfully!",
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
    res.end("上传成功~");
});
app.get('/index.htm', function(req, res) {
    res.sendFile(__dirname + "/index.htm");
});

app.get('/index2.htm', function(req, res) {
    res.sendFile(__dirname + "/index2.htm");
});

app.get('/adduser', function(req, res) {
    var response = {
        firstName: req.query.firstName,
        lastName: req.query.lastName
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/adduser', urlencodedParser, function(req, res) {
    var response = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    console.log(response);
    res.end("POST:" + JSON.stringify(response));
});

var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    var family = server.address().family;

    console.log("访问的地址：http://%s:%s", host, port);
    console.log("family:" + family);
});