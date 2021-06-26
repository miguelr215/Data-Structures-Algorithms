// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// RECURSIVE SOLUTION
function steps(n, row = 0, stair = '') {
    
    // base case
    if(row === n){
        return;
    }

    // recursive case
    if(n === stair.length) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }

    if(stair.length <= row){
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);
    
}


module.exports = steps;

// ITERATIVE SOLUTION
// function steps(n) {

//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let col = 0; col < n; col++){
//             if(col <= row){
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }    
//         }
//         console.log(stair);
//     }
// }