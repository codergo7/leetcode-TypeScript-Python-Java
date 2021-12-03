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