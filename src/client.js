var http = require('http');

var options = {
    host: 'localhost',
    port: '8088',
    path: '/aa/test.html'
};

//处理响应的回调函数

var callback = function(res) {
    var body = '';
    res.on('data', function(data) {
        body += data;
    });
    res.on('end', function() {
        console.log('数据接收完成');
        console.log(body);
    });
};
//向服务端发送请求
var res = http.request(options, callback);
res.end();