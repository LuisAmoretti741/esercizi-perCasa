console.log('è il momento degli array');


///ARRAY
let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];

console.log(numbers.length); //-> 10

console.log(numbers[3]); // -> 44

let booleans = [true, false, true, false, true]

console.log(booleans.length); // -> 5

console.log(booleans[3]); // -> false

let strings = ['pippo', 'pluto', 'topolino', 'luis']


console.log(strings.length); // -> 4

console.log(strings[3]); // -> 'luis'

let strangeArray = [34, false, 'luis', 2, 4, 'luis'] //MAI E POI MAI!!!

console.log(strangeArray.length); // -> 6

console.log(strangeArray[3]); // -> 2

console.log('=======================================');



// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];

//     console.log(element);
// }

// let i = 0;

// while (i < numbers.length) {
//     const element = numbers[i];

//     console.log(element);

//     i++;
// }

// for (const element of numbers) { //FOR OF
//     console.log(element);
// }

for (const stringa of strings) {
    console.log(stringa);
}

//AGGIUNGERE ELEMENTI

// strings.push('paperone'); //push aggiunge in fondo
// console.log(strings);

// strings.unshift('paperino'); //unshift aggiunge in cima
// console.log(strings);

//RIMUOVERE ELEMENTI

// const rimosso = strings.pop(); //toglie l'ultimo elemento
// console.log(strings);
// console.log('ho tolto ' + rimosso);

// const rimosso2 = strings.shift(); //togle il primo elemento
// console.log(strings);
// console.log('ho tolto ' + rimosso2);

// const rimosso3 = strings.splice(2, 1); //toglie in mezzo e restituisce un array con quelli 
// console.log(strings);
// console.log('ho tolto ' + rimosso3);


//CAMBIARE DEGLI ELEMENTI

// strings[0] = 'superpippo'; 
// console.log(strings);

// strings[3] = 'super' + strings[3];
// console.log(strings);

// numbers[4] = 2;
// console.log(numbers);

// numbers[8] = numbers[8] * 2;
// console.log(numbers);

///PATTERN DEGLI ARRAY

//MAP -> modifica di tutti o parte degli elementi di un array

//1) trasforma tutte le stringe dell'array strings al maiuscolo

// for (let i = 0; i < strings.length; i++) {
//     strings[i] = strings[i].toUpperCase();
// }
// console.log(strings);

// function arrayToUpperCase(stringArray) {
//     const newArray = [];
//     for (let i = 0; i < stringArray.length; i++) {
//         const element = stringArray[i];
//         const elementUpper = element.toUpperCase();
//         newArray.push(elementUpper);
//     }    
//     return newArray;
// }

// console.log(arrayToUpperCase(strings));

// //2) moltiplica per 2 a tutti i numeri in un array

// function multiplyBy2Array(numberArray) {
//     const newArray = [];
//     for (let i = 0; i < numberArray.length; i++) {
//         const element = numberArray[i];
//         const duble = element * 2;
//         newArray.push(duble);
//     }    
//     return newArray;
// }

// console.log(multiplyBy2Array(numbers));


//3) trasforma tutte le stringe dell'array che iniziano con 'p' al maiuscolo

// function arrayToUpperCaseWordsStratingWithP(stringArray) {
//     const newArray = [];
//     for (let i = 0; i < stringArray.length; i++) {
//         const element = stringArray[i];

//         if (element[0] === 'p') {
//             const elementUpper = element.toUpperCase();
//             newArray.push(elementUpper);
//         } else {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log(arrayToUpperCaseWordsStratingWithP(strings));



// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] % 2 === 0;
// }
// console.log(numbers);



