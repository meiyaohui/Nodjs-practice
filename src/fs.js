 /**var fs = require('fs');
    var data = '';

    //从流中读取信息


    //创建一个流
    var rs = fs.createReadStream('test.txt');

    //设置编码
    rs.setEncoding('UTF8');

    //处理事件

    rs.on('data', function(chunk) {
        data += chunk;
    });
    rs.on('end', function() {
        console.log(data);
    });
    rs.on('error', function(e) {
        console.log(e.stack);
    })

    console.log('执行完毕');*/


 //写入流
 /**
 var fs = require('fs');
 var data = 'www.cnblogs.com/meiyh';

 var ws = fs.createWriteStream('test.txt');

 ws.write(data, 'UTF8');

 ws.end();

 ws.on('finish', function() {
     console.log('写入完成');
 });

 ws.on("error", function(e) {
     console.log(e.stack);
 });
 console.log('执行完毕');*/


 //管道流
 var fs = require('fs');
 var a = fs.createReadStream('test.txt');
 var b = fs.createWriteStream('output.txt');

 a.pipe(b);
 console.log('执行完毕');