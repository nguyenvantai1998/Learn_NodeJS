var person = {
	ho 		 : "Nguyen",
	ten 	 : "Tai",
	chaomung : function(){
		console.log("Chao ban " + this.ho + " " + this.ten);
	}
}
person.chaomung();

// truy cap vao 1 doi tuong trong lop
console.log(person['ten']);