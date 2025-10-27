// Write a loop that makes seven calls to 
// console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the 
// length of a string by writing .length after it.
// let abc = "abc";
// console.log(abc.length);
// //→ 3

// variabile triangle che contiene "#"
let triangle = "#";

// finché la lunghezza della stringa è minore o uguale a 7
while (triangle.length <= 7) {
  //stampa la stringa
    console.log(triangle);
  // aggiungi un altro "#"
    triangle += "#";
}

// ============================================================
// ============================================================

//Write a program that uses console.log to print all the numbers from 1
// to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
// instead of the number, and for numbers divisible by 5 (and not 3), 
// print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz
// " for numbers that are divisible by both 3 and 5 (and still print 
// "Fizz" or "Buzz" for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed
// out a significant percentage of programmer candidates. So if you solved
// it, your labor market value just went up.)

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// ============================================================
// ============================================================

// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the 
// grid there is either a space or a "#" character. The characters 
// should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding 
// size = 8 and change the program so that it works for any size,
// outputting a grid of the given width and height.

// let size = 8;
// let content = "";

// // ciclo per le righe
// for (let i = 0; i < size; i++) { 
//     //ciclo per le colonne
//     for (let x = 0; x < size; x++) {
//         // se la somma è pari stampa "#"
//         if ((i + x) % 2 ===0) {
//             content += "#";
//         // se dispari stampa " "
//         } else {
//             content += " ";
//         }
//     }
//     // a fine di ogni riga vai a capo
//     content += "\n";
// }
// console.log(content);
