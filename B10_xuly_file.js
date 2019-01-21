var fs = require("fs");

var noidung = fs.readFileSync(__dirname + "/danhsach_file.txt");

console.log(noidung);//Dạng json

console.log(noidung.toString()); // ép kiểu