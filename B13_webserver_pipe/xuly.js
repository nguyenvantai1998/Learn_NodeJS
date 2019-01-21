var http = require("http");//giao thức sever

var fs = require("fs"); //đọc file

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/html"});
	fs.createReadStream(__dirname + "/index.html").pipe(res);//đọc trực tiếp
}).listen(8888);



