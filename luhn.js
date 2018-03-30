"use strict";
module.exports = function luhn(number){
  let numberString = number.toString();
  let sumEverySecond = 0;
  let sumEveryOtherSecond = 0;
  let result = 0;

  //calculate the sum of every second digit
  for (let i = numberString.length - 2; i >= 0; i = i-2) {
    //in case the digit * 2 is larger than 9 add the two digit result
    //e.g. 5 * 2 = 10 then 1 + 0 = 1
    //otherwise just add the digit itself
    if (((numberString.substring(i, i+1)) * 2) > 9){
      let product = (numberString.substring(i, i+1) * 2).toString();

      sumEverySecond += Number(Number(product.substring(0, 1)) + Number(product.substring(1, 2)));
    } else {
      sumEverySecond += Number(numberString.substring(i, i+1) * 2);
    }
  }

  //calculate the sum of every other second digit
  for (let j = numberString.length - 3; j >= 0; j = j-2) {
    sumEveryOtherSecond += Number(numberString.substring(j, j+1));
  }

  //add the sums and add the check digit
  result = sumEverySecond + sumEveryOtherSecond + Number(numberString.substring(numberString.length -1, numberString.length));

  //return the module 10, if it is 0 it's a valid account number
  return result % 10;
}

//console.log(luhn(79927398713));
//               01234567890
/*
1. From the rightmost digit, which is the check digit, and moving left,
double the value of every second digit. The check digit is not doubled,
the first digit doubled is immediately to the left of the check digit.
 If the result of this doubling operation is greater
  than 9 (e.g., 8 × 2 = 16), then add the digits of the
  product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively,
   the same result can be found by subtracting 9 from the product
    (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
2. Take the sum of all the digits.
3. If the total modulo 10 is equal to 0 (if the total ends in zero)
 then the number is valid according to the Luhn formula; else it
 is not val

Assume an example of an account number "7992739871" that will have a check digit added, making it of the form 7992739871x:

Account number      7 9 9 2 7 3 9 8 7 1 x
Double every other  7 18  9 4 7 6 9 16  7 2 x
Sum digits          7 9 9 4 7 6 9 7 7 2 x

(1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
x (the check digit) + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 7 = x + 67
If the sum is a multiple of 10, the account number is possibly valid
*/