(function(){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (i=0 ; i<names.length;i++){
		var firstLetter = names[i].charAt(0).toLowerCase();
		console.log(firstLetter)
		if (firstLetter=='j'){
			console.log("Good Bye "+ names[i])
		}
		else{
			console.log("Hello "+ names[i])
		}
	}
})();