function tinhtong(a,b){
	return a + b;
}
var tong = tinhtong(5,6);
console.log(tong);

// goi ham
function hello(){
	console.log("Chao mung ban Nguyen Van Tai");
}
function goiham(fn){
	fn();
}
goiham(hello);

/////////////////////////////////
var tong = function(){
	console.log("Bai hoc nodejs ve ham");
}
tong();