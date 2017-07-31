'use strict';

function contains(a, i) {
    return i.toString().includes(a); //if...else...的简写
}

function threeMultiples(a, b, c, i) {
    return i % (a * b * c) === 0;

}

function twoMultiples(a, b, i) {
    return i % (a * b) === 0;
}

/**
 * @return {boolean}
 */
function Multiples(a, i) {
    return i % a === 0;
}

function fizbuzzwhizz(a, b, c) {
    let result = [];
    for (let i = 1; i < 101; i++) {
        if (contains(a, i)) {
            result.push('Fizz');
        } else if (threeMultiples(a, b, c, i)) {
            result.push('FizzBuzzWhizz');
        } else if (twoMultiples(a, b, i)) {
            result.push('FizzBuzz');
        } else if (twoMultiples(a, c, i)) {
            result.push('FizzWhizz');
        } else if (twoMultiples(b, c, i)) {
            result.push('BuzzWhizz');
        } else if (Multiples(a, i)) {
            result.push('Fizz');
        } else if (Multiples(b, i)) {
            result.push('Buzz');
        } else if (Multiples(c, i)) {
            result.push('Whizz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
}