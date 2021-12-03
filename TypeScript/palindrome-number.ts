/**
 * 
    * Given an integer x, return true if x is palindrome integer.
    An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

    Example 1:
    Input: x = 121
    Output: true

    Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    
    Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
    Example 4:

    Input: x = -101
    Output: false    

    Constraints:
    -231 <= x <= 231 - 1    

    Follow up: Could you solve it without converting the integer to a string? 
 */

function isPalindrome(x: number): boolean {
    
    // check if the number is negative
    if(x < 0) return false;   
    
    let y = x;
    
    // find reverse of the number
    let reversedNumber = 0;
    
    while(y>=1){        
        reversedNumber = 10 * reversedNumber + ~~y % 10;
        y /=10; 
    }
    
    // check if x equqls reserved number    
    return x === reversedNumber;
};
function isPalindrome2(x: number): boolean {
    if (x < 0) return false;
    let reversedNumber = 0;
  
    for (let i = x; i > 0; i = ~~(i / 10)) {
        reversedNumber = reversedNumber * 10 + i % 10;
    }
    return reversedNumber === x;
  }

// expeted true
console.log(isPalindrome(1234321))

// expeted false
console.log(isPalindrome(1234))