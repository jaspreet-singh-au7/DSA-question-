// Q1 Power of Four


var isPowerOfFour = function(n) {
if(n==1) return true;

if(n<1) return false

return isPowerOfFour(n/4)
}


// Q2 Power of Two

var isPowerOfTwo = function(n) {
if(n==1) return true;

if(n%2 !==0 || n <1){
    return false
}

return isPowerOfTwo(n/2)
}

// Q3 Pow(x, n)

var myPow = function(x, n) {
if(n===0) return 1;

if(n<0) { 
x = 1/x
n= -n
}

let half = myPow(x, Math.floor(n/2))
if(n%2==0){
    return half*half;
}else{
    return (half*half) * x
}
}

// Factorial of a number

class Solution {
    factorial(n) {
        if(n==0 || n==1 ) return 1
        return n*this.factorial(n-1);
    }
}


// Fibonacci number

 var fib = function(n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2)
 }


//  Valid Palindrome

var isPalindrome = function(s) {
let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    function check(left, right) {
        if (left >= right) return true;
        if (cleaned[left] !== cleaned[right]) return false;
        return check(left + 1, right - 1);
    }

    return check(0, cleaned.length - 1);
}


