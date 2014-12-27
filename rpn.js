/*jslint node:true */
'use strict';

var parse = require('./lib/parser'),
    operators = require('./lib/operators'),
    tokenize = require('./lib/tokenizer'),
    calculate = require('./lib/calculator');

/**
 * Evaluates an expression written in reverse Polish notation.
 *
 * @example
 *    var calc = require('rpn');
 *    calc('1 2 +'); // 3
 *    calc('1 2 + 3 -'); // 0
 *
 * @param  {String|Array} input Arithmetic expression in RPN.
 * @return {Number}             Result.
 */
module.exports = function (input) {
    return calculate(tokenize(parse(input), operators));
};