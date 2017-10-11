function mutation(arr) {
    var secondWordSplited = arr[1].toLowerCase().split("");
    var hasIndex;

    for (var i = 0; i < secondWordSplited.length; i++) {
        if (arr[0].toLowerCase().indexOf(secondWordSplited[i]) > -1) {
            hasIndex = true;
        } else {
            hasIndex = false;
            break;
        }
    }
    return hasIndex;
}

console.log(mutation(["Mary", "Army"]));