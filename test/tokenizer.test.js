/**
 * @fileOverview Unit test suite for lib/tokenizer.js.
 */

/*jslint node: true */
/*global describe, it */

'use strict';

var expect = require('chai').expect,
    tokenizer = require('../lib/tokenizer.js');

describe('tokenizer', function () {

    it('should be a function', function () {
        expect(tokenizer).to.be.a('function');
    });

    it('should map numbers to numeric strings in input', function () {
        var output = tokenizer(['-1', '0', '1.1'], {});
        expect(output).to.eql([-1, 0, 1.1]);
    });

    it('should support scientific notation', function () {
        var output = tokenizer(['1e1', '-1e1', '1e+2', '1e-2'], {});
        expect(output).to.eql([10, -10, 100, 0.01]);
    });

    it('should map operators to keys', function () {
        var output = tokenizer(['x'], {x: 'foo'});
        expect(output).to.eql(['foo']);
    });

});