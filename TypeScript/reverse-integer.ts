/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0

Constraints: -231 <= x <= 231 - 1
 * 
 */

function reverse(x: number): number {
  let reversedNumber: number = 0;
  let roundDown = (int: number): number => Math.round(int - 0.5);
  let isNumberNegative: boolean = false;
  if (x < 0) {
    x = Math.abs(x);
    isNumberNegative = true;
  }

  while (x >= 1) {
    const remainder: number = x % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    reversedNumber = roundDown(reversedNumber);

    if (
      reversedNumber >= Math.pow(2, 31) - 1 ||
      reversedNumber <= Math.pow(-2, 31)
    ) {
      return 0;
    }
    x = x / 10;
  }
  if (isNumberNegative) {
    reversedNumber *= -1;
  }

  return reversedNumber;
}

function reverse2(x: number): number {
    let output = Math.abs(parseInt(x.toString().split('').reverse().join('')))
    return output >= -(2 ** 31) && output <= (2 ** 31 - 1) ? output * Math.sign(x) : 0
};

console.log(reverse(1534236469));
console.log(reverse2(1534236469));
