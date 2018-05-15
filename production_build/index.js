var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(9008, function() {
    console.log('server running at port 9008');
});