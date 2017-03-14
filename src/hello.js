function Hello() {
    this.Name = '';
    this.setName = function(newname) {
        this.Name = newname;
    };
    this.sayHello = function() {
        console.log(this.Name + " say:Hello!");
    }
}
module.exports = Hello;