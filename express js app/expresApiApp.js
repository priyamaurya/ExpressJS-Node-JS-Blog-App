var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("this is html");
});

app.get('/api',function(req,res){
	res.send({name:'chintu',age:25});
});
app.listen(3000);