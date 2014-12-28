/**
 * @fileOverview Unit test suite for lib/operators.js.
 */

/*jslint node: true */
/*global describe, it */

'use strict';

var expect = require('chai').expect,
    operators = require('../lib/operators.js');

describe('operators', function () {

    it('should be an object', function () {
        expect(operators).to.be.an('object');
    });

    // Arithmetic operators:

    it('should have a `+` method that sums', function () {
        expect(operators).to.have.property('+').that.is.a('function');
        expect(operators['+'](1, 2)).to.equal(3);
    });

    it('should have a `-` method that subtracts', function () {
        expect(operators).to.have.property('-').that.is.a('function');
        expect(operators['-'](1, 2)).to.equal(-1);
    });

    it('should have a `*` method that multiplies', function () {
        expect(operators).to.have.property('*').that.is.a('function');
        expect(operators['*'](2, 3)).to.equal(6);
    });

    it('should have a `/` method that divides', function () {
        expect(operators).to.have.property('/').that.is.a('function');
        expect(operators['/'](7, 2)).to.equal(3.5);
    });

    it('should have a `%` method that returns a modulus', function () {
        expect(operators).to.have.property('%').that.is.a('function');
        expect(operators['%'](12, 5)).to.equal(2);
    });

    it('should have a `pow` method that exponentiates', function () {
        expect(operators).to.have.property('pow').that.is.a('function');
        expect(operators.pow(7, 2)).to.equal(49);
    });

    // Comparison operators:

    it('should have a `max` method that returns largest of args', function () {
        expect(operators).to.have.property('max').that.is.a('function');
        expect(operators.max(1, 2)).to.equal(2);
    });

    it('should have a `min` method that returns smallest of args', function () {
        expect(operators).to.have.property('min').that.is.a('function');
        expect(operators.min(1, 2)).to.equal(1);
    });

    // Bitwise operators:

    it('should have a `&` method that performs bitwise AND', function () {
        expect(operators).to.have.property('&').that.is.a('function');
        expect(operators['&'](15, 9)).to.equal(9); // 1111 & 1001 = 1001
    });

    it('should have a `|` method that performs bitwise OR', function () {
        expect(operators).to.have.property('|').that.is.a('function');
        expect(operators['|'](15, 9)).to.equal(15); // 1111 & 1001 = 1111
    });

    it('should have a `^` method that performs bitwise XOR', function () {
        expect(operators).to.have.property('^').that.is.a('function');
        expect(operators['^'](15, 9)).to.equal(6); // 1111 & 1001 = 0110
    });

    it('should have a `<<` method that shifts left', function () {
        expect(operators).to.have.property('<<').that.is.a('function');
        expect(operators['<<'](9, 2)).to.equal(36); // 1001 -> 100100
    });

    it('should have a `>>` method that shifts right with sign', function () {
        expect(operators).to.have.property('>>').that.is.a('function');
        expect(operators['>>'](9, 2)).to.equal(2); // 1001 -> 10
        expect(operators['>>'](-9, 2)).to.equal(-3); // -1001 -> -11
    });

    it('should have a `>>>` method that shifts right', function () {
        expect(operators).to.have.property('>>>').that.is.a('function');
        expect(operators['>>>'](19, 2)).to.equal(4); // 10011 -> 100
    });

});