var a = new Buffer('欢迎学习NodeJs');
var json = a.toJSON(a);
console.log(json);


var buffer1 = new Buffer("我喜欢");
var buffer2 = new Buffer("你");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('内容是：' + buffer3.toString());

var buffer1 = new Buffer('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0, 2);
console.log("buffer2 content: " + buffer2.toString());