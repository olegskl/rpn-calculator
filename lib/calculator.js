/*jslint node:true */
'use strict';

/**
 * Evaluates a list of tokens using basic RPN algorithm.
 * @throws {TypeError} If at least one of tokens is invalid.
 * @throws {Error} If there are not enough values, e.g. `2 +`.
 * @throws {Error} If there are too many values, e.g. `1 2 3 +`.
 * @param  {Array}  tokens List of tokens.
 * @return {Number}        Computation result.
 */
module.exports = function (tokens) {

    var arity = 2, // arity of operators
        stack = [];

    tokens.forEach(function (token) {
        if (typeof token === 'number' && !isNaN(token)) {
            stack.push(token);
        } else if (typeof token === 'function') {
            if (stack.length < arity) {
                throw new Error('not enough values');
            }
            stack.push(token.apply(null, stack.splice(-2)));
        } else {
            throw new TypeError('invalid input token "' + token + '"');
        }
    });

    if (stack.length !== 1) {
        throw new Error('too many values');
    }

    return stack[0];

};
