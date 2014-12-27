RPN calculator
==============

> Reverse Polish notation calculator

[![Build Status](https://travis-ci.org/olegskl/rpn-calculator.svg?branch=master)](https://travis-ci.org/olegskl/rpn-calculator)
[![Code Climate](https://codeclimate.com/github/olegskl/rpn-calculator.png)](https://codeclimate.com/github/olegskl/rpn-calculator)

[![browser support](https://ci.testling.com/olegskl/rpn-calculator.png)
](https://ci.testling.com/olegskl/rpn-calculator)

## Installation

    npm install git://github.com/olegskl/rpn-calculator.git

or in package.json as a dependency:

    "dependencies": {
        "rpn-calculator": "git://github.com/olegskl/rpn-calculator.git"
    }

### Usage

    var calculator = require('rpn-calculator');
    calculator('1 2 +'), // 3
    calculator('1 2 + 3 -'), // 0

### Tests

    npm install && npm test

## License

http://opensource.org/licenses/mit-license.html