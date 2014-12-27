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
        expect(operators['/'](6, 3)).to.equal(2);
    });

});