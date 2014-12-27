/*jslint node:true */
'use strict';

/**
 * Parses a expression written in reverse Polish notation.
 * @param  {String} input Expression, e.g. `'2 2 +'`.
 * @return {Array}        Token keys, e.g. `['2', '2', '+']`.
 */
module.exports = function (input) {

    if (typeof input === 'string') {
        input = input.split(/\s+/);
    } else if (!Array.isArray(input)) {
        throw new TypeError('invalid input');
    }

    return input;
};