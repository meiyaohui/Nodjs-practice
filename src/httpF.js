var http = require('http');
var url = require('url');

function start(route) {
    http.createServer(function(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('pathname:' + pathname);

        route(pathname);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Hello World!");
        res.end();
    }).listen(8888, "127.0.0.1");
}
module.exports = start;