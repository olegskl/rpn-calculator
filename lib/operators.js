/*jslint node:true */
'use strict';

module.exports = {

    // Arithmetic operators:
    '+': function (a, b) { return a + b; },
    '-': function (a, b) { return a - b; },
    '*': function (a, b) { return a * b; },
    '/': function (a, b) { return a / b; },
    '%': function (a, b) { return a % b; },
    'pow': function (a, b) { return Math.pow(a, b); },

    // Comparison operators:
    'max': function (a, b) { return Math.max(a, b); }, // arity is 2
    'min': function (a, b) { return Math.min(a, b); }, // arity is 2

    // Bitwise operators:
    '&': function (a, b) { return a & b; }, // AND
    '|': function (a, b) { return a | b; }, // OR
    '^': function (a, b) { return a ^ b; }, // XOR
    '<<': function (a, b) { return a << b; }, // left shift
    '>>': function (a, b) { return a >> b; }, // sign-propagating right shift
    '>>>': function (a, b) { return a >>> b; }, // zero-fill right shift

};