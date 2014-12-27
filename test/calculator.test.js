/**
 * @fileOverview Unit test suite for rpn.js.
 */

/*jslint node: true */
/*global describe, it */

'use strict';

var chai = require('chai'),
    expect = chai.expect,
    spies = require('chai-spies'),
    calculator = require('../lib/calculator.js');

chai.use(spies);

describe('calculator', function () {

    it('should be a function', function () {
        expect(calculator).to.be.a('function');
    });

    it('should apply operators on preceding values', function () {
        var operator = chai.spy();
        calculator([1, 2, operator]);
        expect(operator).to.have.been.called.with(1, 2);
    });

    it('should return value returned by operator', function () {
        var result = calculator([1, 2, function () { return 'foo'; }]);
        expect(result).to.equal('foo');
    });

    it('should throw an Error when called with too few values', function () {
        function calculate() { calculator([1, function () {}]); }
        expect(calculate).to.throw(Error, 'not enough values');
    });

    it('should throw an Error when called with too many values', function () {
        function calculate() { calculator([0, 1, 2, function () {}]); }
        expect(calculate).to.throw(Error, 'too many values');
    });

    it('should throw TypeError when called with invalid tokens', function () {
        [undefined, null, false, true, 'foo'].forEach(function (value) {
            var expectedMessage = 'invalid input token "' + value + '"';
            function calculate() { calculator([1, 2, value]); }
            expect(calculate).to.throw(TypeError, expectedMessage);
        });
    });

});