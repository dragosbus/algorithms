var rows = Number(prompt("Inser an number"));

for (var i = 1; i <= rows; i++) {
    //First Pyramid
    for (var j = rows - i; j > 0; j--) {
        //Unicode Character 'FIGURE SPACE' 
        print("&#8199;");
    }

    for (var k = 1; k < i + 1; k++) {
        print("#");
    }

    //Unicode Character 'FIGURE SPACE' 
    print("&#8199;&#8199;");
    //Second Pyramid
    for (var m = 1; m < i + 1; m++) {
        print("#");
    }

    for (var n = rows - i; n > 0; n--) {
        print("&#8199;");
    }

    print("<br>");
}

function print(message) {
    document.write(message);
}