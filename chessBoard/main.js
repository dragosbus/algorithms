
	var rows = Number(prompt("Enter a number greater that 0 and less than 23"));
	
	for(var i=1;i<=rows;i++) {
		if(i%2 !== 0) {
			for(var j=0;j<4;j++) {
				print("<div class='black'></div>");
				print("<div class='white'></div>");
			}
		} else {
			for(var k=0;k<4;k++) {
				print("<div class='white'></div>");
				print("<div class='black'></div>");
			}
		}
		print("<br>");
	}

	
function print(message) {
	document.querySelector(".board").innerHTML += message;
}

