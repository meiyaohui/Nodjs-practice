var util = require('util');

function Base() {
    this.name = 'base';
    this.age = '100';
    this.sayHi = function() {
        console.log(this.name + " hello!");
    }
}
Base.prototype.showMsg = function(msg) {
    console.log(this.name + " say:" + msg);
};

function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);

var objBase = new Base();

objBase.showMsg('ddd');
objBase.sayHi();

console.log(objBase);

var objsub = new Sub();
objsub.showMsg('hh');

console.log(objsub);
console.log(util.inspect(objsub, true));