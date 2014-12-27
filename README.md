RPN calculator
==============

[Reverse Polish notation (RPN)](http://en.wikipedia.org/wiki/Reverse_Polish_notation) is a mathematical notation in which every operator follows all of its operands, in contrast to [Polish notation](http://en.wikipedia.org/wiki/Polish_notation), which puts the operator in the prefix position. It is also known as postfix notation and is parenthesis-free as long as operator arities are fixed.

[![Build Status](https://travis-ci.org/olegskl/rpn-calculator.svg?branch=master)](https://travis-ci.org/olegskl/rpn-calculator)
[![Code Climate](https://codeclimate.com/github/olegskl/rpn-calculator/badges/gpa.svg)](https://codeclimate.com/github/olegskl/rpn-calculator)

[![browser support](https://ci.testling.com/olegskl/rpn-calculator.png)
](https://ci.testling.com/olegskl/rpn-calculator)

## Installation

```Bash
npm install git://github.com/olegskl/rpn-calculator.git
```

or in package.json as a dependency:

```JavaScript
"dependencies": {
    "rpn-calculator": "git://github.com/olegskl/rpn-calculator.git"
}
```

### Usage

```JavaScript
var calculator = require('rpn-calculator');

// 1 + 2 = 3
calculator('1 2 +'); // 3

// 1 + 2 - 3 = 0
calculator('1 2 + 3 -'); // 0

// (1 + 2) * 3 = 9
calculator('1 2 + 3 *'); // 9
```

### Tests

```Bash
npm install && npm test
```

## License

http://opensource.org/licenses/mit-license.html