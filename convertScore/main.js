function convertScoreToGradeWithPlusAndMinus(score) {
    
    var result;
    if (score >= 0 && score < 60) {
        return "F";
    } else if (score >= 60 && score < 70) {
        result = "D";
    } else if (score >= 70 && score < 80) {
        result = "C";
    } else if (score >= 80 && score < 90) {
        result = "B";
    } else if (score >= 90 && score <= 100) {
        result = "A";
    } else {
        return "INVALID SCORE";
    }
    result += plusOrminus(score);
    return result;
}

/*Function for concatinate to result "-" if the range is between 0 and 2(inclusive) and 
  with "+" if the range is between 8 and 9 or the score is 100
*/

function plusOrminus(score) {
    var range = score % 10;
    //We have to check if score is not 100 because 100%10 is 0
    if (range >= 0 && range <= 2 && score !== 100) {
        return "-";
    } else if (range === 8 || range === 9 || score === 100) {
        return "+";
    } else {
        return "";
    }
}

console.log(convertScoreToGradeWithPlusAndMinus(100));