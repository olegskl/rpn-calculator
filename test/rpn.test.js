/**
 * @fileOverview Unit test suite for rpn.js.
 */

/*jslint node: true */
/*global describe, it */

'use strict';

var expect = require('chai').expect,
    rpn = require('../rpn.js');

describe('rpn', function () {

    it('should be a function', function () {
        expect(rpn).to.be.a('function');
    });

    it('should compute from Strings', function () {
        expect(rpn('2 2 +')).to.equal(4);
        expect(rpn('2 -2 +')).to.equal(0);
    });

    it('should compute from Arrays', function () {
        expect(rpn([2, 3, '+'])).to.equal(5);
        expect(rpn([2, -3, '*'])).to.equal(-6);
    });

});