var events = require('events');
var eventEmitter = new events.EventEmitter();


//创建处理程序
var onFire = function() {
    console.log('点火');

    //触发放油
    eventEmitter.emit('pour_oil');
};
eventEmitter.on('fire', onFire);

var oil = function() {
    console.log('往锅里倒油');
}

eventEmitter.on('pour_oil', oil);

var listen1;
//添加监听器
eventEmitter.addListener('fire', listen1 = function() {

    console.log('fire1');
});
eventEmitter.addListener('fire', function() {

    console.log('fire2');
});
//统计fire事件上有多少个监听器
var count = require('events').EventEmitter.listenerCount(eventEmitter, 'fire');
console.log("fire上有 " + count + " 个事件监听器。");

//移除监听器
eventEmitter.removeListener('fire', listen1);
console.log('listen1 已经被移除');


//统计fire事件上有多少个监听器
var count = require('events').EventEmitter.listenerCount(eventEmitter, 'fire');
console.log("fire上有 " + count + " 个事件监听器。");

console.log('程序结束');