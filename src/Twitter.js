var express = require('express')
var app = express.createServer()
app.get('/', function(req, res) {
    res.send('欢迎来到Twitter.')
})

app.listen(8000)