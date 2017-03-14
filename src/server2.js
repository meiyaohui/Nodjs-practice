var http = require('http');
var fs = require('fs');
var url = require('url');

//创建一个服务器
http.createServer(function(req, res) {
    //解析请求，包括文件名
    var pathname = url.parse(req.url).pathname;

    console.log('请求的文件名：' + pathname);
    console.log('substr:' + pathname.substr(1));

    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8088);
console.log('Server running at http://127.0.0.1:8088/');