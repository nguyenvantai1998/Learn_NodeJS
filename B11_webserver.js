var http = require("http");//gọi giao thức http

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("<u>nguyenvantai.tk</u>");
}).listen(9999);