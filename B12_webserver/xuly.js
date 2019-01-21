var http = require("http");//giao thức sever

var fs = require("fs"); //đọc file

// http.createServer(function(req, res){
// 	res.writeHead(200, {"Content-Type":"text/html"});
// 	var data = fs.readFileSync(__dirname + "/index.html","utf-8");
// 	res.end(data);	
// }).listen(8888);
////////////////
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/html"});
	var data = fs.readFileSync(__dirname + "/index1.html","utf-8");
	data = data.replace("{NAME}","VĂN TÀI")
	res.end(data);	
}).listen(8888);


