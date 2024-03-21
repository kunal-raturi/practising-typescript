function add(n1: number, n2: number, showresult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showresult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
const num1 = 5;
const num2 = 2.3;
const printresult = true;
const phrase = "result is :";
const result = add(num1, num2, printresult, phrase);
