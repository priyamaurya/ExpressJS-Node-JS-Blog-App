var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("this is html");
});
app.listen(3000);