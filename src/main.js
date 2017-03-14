// console.log(__filename);
// console.log(__dirname);

// function play() {
//     console.log("hi");
// }

// var a = setInterval(play, 1000);
// setTimeout(function() { clearInterval(a); }, 5000);

//************start 请求参数 start***************************** */
// var http = require('http');
// var url = require('url');
// var util = require('util');

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     //解析url参数
//     var params = url.parse(req.url, true).query;
//     if (params && params.name && params.age) {
//         res.write("name:" + params.name);
//         res.write("age:" + params.age);
//     } else {
//         res.write("没有参数~");
//     }

//     res.end();
// }).listen(4000);

//************end请求参数 end***************************** */


// var http = require('http');
// var querystring = require('querystring');

// //提交表单html
// var postHTML =
//     '<html><head><meta charset="utf-8"><title> Node.js 实例</title></head>' +
//     '<body>' +
//     '<form method="post">' +
//     '登陆名： <input name="name"><br>' +
//     '密码： <input name="pwd" type="password"><br>' +
//     '<input type="submit">' +
//     '</form>' +
//     '</body></html>';

// http.createServer(function(req, res) {
//     var body = '';
//     console.log("--开始--");
//     req.on('data', function(chunk) {
//         body += chunk;
//         console.log(chunk);
//     });
//     req.on('end', function() {
//         body = querystring.parse(body);
//         res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
//         if (body.name && body.pwd) {
//             res.write("登陆名：" + body.name);
//             res.write("密码：" + body.pwd);
//         } else {
//             res.write(postHTML);
//         }
//         res.end();
//     });

// }).listen(4000);


// //操作系统模块
// var os = require("os");

// // CPU 的字节序
// console.log('endianness : ' + os.endianness());

// // 操作系统名
// console.log('type : ' + os.type());

// // 操作系统名
// console.log('platform : ' + os.platform());

// // 系统内存总量
// console.log('total memory : ' + os.totalmem() + " bytes.");

// // 操作系统空闲内存量
// console.log('free memory : ' + os.freemem() + " bytes.");


//Path模块
var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));