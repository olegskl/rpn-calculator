/*jslint node:true */
'use strict';

module.exports = {

    // Arithmetic operators:
    '+': function (a, b) { return a + b; },
    '-': function (a, b) { return a - b; },
    '*': function (a, b) { return a * b; },
    '/': function (a, b) { return a / b; },
    '%': function (a, b) { return a % b; },
    'pow': Math.pow,

    // Comparison operators:
    'max': Math.max,
    'min': Math.min,

    // Bitwise operators:
    '&': function (a, b) { return a & b; }, // AND
    '|': function (a, b) { return a | b; }, // OR
    '^': function (a, b) { return a ^ b; }, // XOR
    '<<': function (a, b) { return a << b; }, // left shift
    '>>': function (a, b) { return a >> b; }, // sign-propagating right shift
    '>>>': function (a, b) { return a >>> b; }, // zero-fill right shift

};