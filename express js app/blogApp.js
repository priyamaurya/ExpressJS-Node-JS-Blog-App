var express = require('express');
var app = express();
var blogEngine = require('./blogApi.js');
 
app.get('/', function(req, res) {
    res.sendfile('home.html',{title:"My Blog",entries:blogEngine.getBlogEntries()});
});
 
app.get('/about', function(req, res) {
    res.sendfile('about.html',{title:"About Me"});
});
 
app.get('/article/:id', function(req, res) {
   var entry = blogEngine.getBlogEntry(req.params.id); 
    res.sendfile('about.html',{title:entry.title, blog:entry});
});
 
app.listen(8989);