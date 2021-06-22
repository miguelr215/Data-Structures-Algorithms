// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // SOLUTION #3
    // use the array reduce method 
    return str.split('').reduce((reversed, character) => 
        character + reversed
        , '');
}

module.exports = reverse;


// function reverse(str) {

//     // SOLUTION #1
//     // turn string into an array and use the arry reverse method
//     const arr = str.split('');  // splits each character in string into an array
//     arr.reverse();  // reverses the array
//     return arr.join('');  // joins the array back to a string
//     // can also be written as return str.split('').reverse().join('');

// }


// function reverse(str) {

//     // SOLUTION #2
//     // use a for loop to cycle through string and create new revered string
//     let reversed = '';
//     for (let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
    
// }