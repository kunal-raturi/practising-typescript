function add(n1, n2, showresult, phrase) {
    var result = n1 + n2;
    if (showresult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 2.3;
var printresult = true;
var phrase = "result is :";
var result = add(num1, num2, printresult, phrase);
