/*jslint node:true */
'use strict';

/**
 * Tokenizes a list of keys with given operators.
 * @param  {Array}  keys      Token keys.
 * @param  {Object} operators Operator function dictionary.
 * @return {Array}            List of tokens for RPN calculator.
 */
module.exports = function (keys, operators) {
    return keys.map(function (key) {
        return operators[key] || parseFloat(key);
    });
};