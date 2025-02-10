"use strict";
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumFor([1, 2, 3, 4]));
// using while-loop
function sumWhile(numbers) {
    let sum = 0;
    let i = 1;
    while (i <= numbers.length) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumWhile([1, 2, 3, 4]));
// using recursion
function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers[0] + sumRecursion(numbers.slice(1));
}
console.log(sumRecursion([1, 2, 3, 4]));
// using formula
function sumFormula(numbers) {
    const n = numbers.length;
    return (n * (n + 1)) / 2;
}
console.log(sumFormula([1, 2, 3, 44])); // 15
