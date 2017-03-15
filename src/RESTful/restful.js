var express = require('express');
var fs = require('fs');

var app = express();
app.listen(8000);

app.get('/listuser', function(req, res) {
    fs.readFile(__dirname + "/user.json", "utf8", function(err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

app.get('/adduser', function(req, res) {
    var user = {
        "user4": {
            "name": "meiyh",
            "password": "ddd",
            "profession": "IT",
            "id": 4
        }
    };
    fs.readFile(__dirname + "/user.json", "utf8", function(err, data) {
        var obj = JSON.parse(data);
        obj["user4"] = user["user4"];


        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(JSON.stringify(obj));
        }
    });
});

app.get('/deluser/:id', function(req, res) {

    fs.readFile(__dirname + "/user.json", "utf8", function(err, data) {
        var obj = JSON.parse(data);

        var id = req.params.id;
        delete obj["user" + id];

        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(JSON.stringify(obj));
        }
    });
})

app.get('/:id', function(req, res) {

    fs.readFile(__dirname + "/user.json", "utf8", function(err, data) {
        var obj = JSON.parse(data);

        var id = req.params.id;
        var user = obj["user" + id];

        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(JSON.stringify(user));
        }
    });
})