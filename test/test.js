/* tests
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
var assert = require('assert');
var luhn = require('../luhn');

describe('Luhn correct', function() {
  describe('#indexOf()', function() {
    it('should return 0 when the value is valid', function() {
      assert.equal(luhn(79927398713), 0);
    });
  });
});

describe('Luhn wrong', function() {
  describe('#indexOf()', function() {
    it('should not return 0 when the value is valid', function() {
      assert.notEqual(luhn(79927398711), 0);
    });
  });
});

