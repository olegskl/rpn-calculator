/**
 * @fileOverview Unit test suite for lib/parser.js.
 */

/*jslint node: true */
/*global describe, it */

'use strict';

var expect = require('chai').expect,
    parser = require('../lib/parser.js');

describe('parser', function () {

    it('should be a function', function () {
        expect(parser).to.be.a('function');
    });

    it('should throw when called with neither Array nor String', function () {
        [undefined, null, 42, true, false, {}].forEach(function (value) {
            expect(parser.bind(null, value)).to.throw(TypeError, 'invalid input');
        });
    });

    it('should return unmodified ref when called with Array', function () {
        var input = ['1', '2', '+'],
            output = parser(input);
        expect(output).to.equal(input);
        expect(output).to.eql(['1', '2', '+']);
    });

    it('should split String by whitespace and return Array', function () {
        expect(parser('1 2 +')).to.eql(['1', '2', '+']);
        expect(parser('42 12 -')).to.eql(['42', '12', '-']);
        expect(parser('4.2 0 *')).to.eql(['4.2', '0', '*']);
    });

});
