var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(9000);

app.get("/",function(req, res){
	//res.send("<font color=red>Nguyễn Văn Tài</font");
	res.sendFile(__dirname + "/index.html");
});

app.get("/gioithieu",function(req, res){
	//res.send("<font color=red>Nguyễn Văn Tài</font");
	res.send("Giới thiệu Routing");
});

app.get("/tinhtong/:so1/:so2",function(req, res){
	//res.send("<font color=red>Nguyễn Văn Tài</font");
	var n = req.params.so1;
	n = parseInt(n);

	var m = req.params.so2;
	m = parseInt(m);

	var tong = n + m;

	res.send("<h1>" + tong + "</h1>");
});