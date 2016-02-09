var express = require('express');
var app = express();
var bodyParser=require('body-parser');

var port = 4500;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var api = require('./api')(app,express);
app.use('/api',api);


app.listen(port, function() {
	console.log('server listening on port 4500');
});