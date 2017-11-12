var express = require('express');
var app = express();

//set view engine
app.set("view engine","jade")
app.set("views","myViews")

app.get('/', function (req, res) {

    res.render('sample');

});

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});
