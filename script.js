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
// let line = '#'
// for (let i = 0; i < 7; i++) {
//     console.log(line);
//     line += '#'
// }

// // variabile triangle che contiene "#"
// let triangle = "#";

// // finché la lunghezza della stringa è minore o uguale a 7
// while (triangle.length <= 7) {
//   //stampa la stringa
//     console.log(triangle);
//   // aggiungi un altro "#"
//     triangle += "#";
// }

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

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

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

// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         console.log(' # # # #');
//     } else {
//         console.log('# # # #');
//     }
// }

// let content = '';
// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         content = content + ' # # # #\n';
//     } else {
//         content = content + '# # # # \n';
//     }
// }
// console.log(content);

// let size = 8;
// let content = "";

// // ciclo per le righe
// for (let i = 0; i < size; i++) { 
//     //ciclo per le colonne
//     for (let x = 0; x < size; x++) {
//         // se la somma è pari stampa "#"
//         if ((i + x) % 2 === 0) {
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


//ESERCIZI
// 16)Scrivi una funzione che mi dice se un numero è pari.

// function checkEven(inputNumber) {
//     const isEven = inputNumber % 2 === 0;
//     return isEven;
// }

// const checkEvenLambda = (inputNumber) => inputNumber % 2 === 0;

// const rs1 = checkEven(22);
// console.log(rs1);

// const rs2 = checkEven(21);
// console.log(rs2);

// const rs3 = checkEvenLambda(221);
// console.log(rs3);

// const rs4 = checkEvenLambda(212);
// console.log(rs4);

// 17) scrivi una funzione che moltiplichi una stringa per un numero
// es: se inserisco "cacca" e 3, l'output sarà 'caccacaccacaccacacca'

// function multiplyString(inputString, multiplier) {
//     let multipliedString = '';
//     for (let i = 0; i < multiplier; i++) {
//         multipliedString += inputString;
//     }
//     return multipliedString;
// }

// const multiplyStringLambda = (inputString, multiplier) => inputString.repeat(multiplier);

// const res5 = multiplyString('pippo ',6);
// console.log(res5);

// const res6 = multiplyStringLambda('pippo ',100);
// console.log(res6);

// 18) scrivi una funzione che dato un numero mi dice se è intero oppure no
// function checkInteger(n) {
//     const isInteger = n % 1 === 0;
//     return isInteger;
// }

// const checkIntegerLambda = n => n % 1 === 0;


// const rest7 = checkInteger(5)
// console.log(rest7);

// const rest8 = checkIntegerLambda(5.5)
// console.log(rest8);

