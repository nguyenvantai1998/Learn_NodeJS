var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(9000);

app.get("/",function(req, res){
	//res.send("<font color=red>Nguyễn Văn Tài</font");
	res.sendFile(__dirname + "/index.html");
});