// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reversed = '';

    for(let i = 0; i < str.length; i++){
        reversed = str[i] + reversed;
    }

    if(str === reversed){
        return true;
    } else {
        return false;
    }
    

    // ALTERNATIVE SOLUTION #1 
    // use split-reverse-join methods to reverse a string and compare to original
    // cleanest & most efficient
    // const reversed = str.split('').reverse().join('');
    // return str === reversed;


    // ALTERNATIVE SOLUTION #2
    // use the every method to compare each character based on index
    // least efficient because it does double the work when comparing second half of string again
    // return str.split('').every((char, i) => {
    //     return char === str[str.length - i -1];
    // })
}

module.exports = palindrome;
