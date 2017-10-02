var rows = Number(prompt("Enter a number greater that 0 and less than 23"));

for (var i = 1; i <= rows; i++) {
    for (var j = rows - i; j > 0; j--) {
        //Unicode Character 'FIGURE SPACE' 
        print("&#8199;");
    }
    for (var k = 1; k < i + 1; k++) {
        print("#");
    }
    print("<br>");
}


function print(message) {
    document.write(message);
}