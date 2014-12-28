RPN calculator
==============

[Reverse Polish notation (RPN)](http://en.wikipedia.org/wiki/Reverse_Polish_notation) is a mathematical notation in which every operator follows all of its operands, in contrast to [Polish notation](http://en.wikipedia.org/wiki/Polish_notation), which puts the operator in the prefix position. It is also known as postfix notation and is parenthesis-free as long as operator arities are fixed.

[![Build Status](https://travis-ci.org/olegskl/rpn-calculator.svg?branch=master)](https://travis-ci.org/olegskl/rpn-calculator)
[![Code Climate](https://codeclimate.com/github/olegskl/rpn-calculator/badges/gpa.svg)](https://codeclimate.com/github/olegskl/rpn-calculator)
[![Coverage Status](https://img.shields.io/coveralls/olegskl/rpn-calculator.svg)](https://coveralls.io/r/olegskl/rpn-calculator)

## Installation

```Bash
npm install rpn-calculator
```

## Usage

```JavaScript
var calculator = require('rpn-calculator');

// 1 + 2 = 3
calculator('1 2 +'); // 3

// 1 + 2 - 3 = 0
calculator('1 2 + 3 -'); // 0

// (1 + 2) * 3 = 9
calculator('1 2 + 3 *'); // 9
```

Supports scientific notation:

```JavaScript
calculator('1e2 1e-2 +'); // 100.01
```

### Available operators

All operators replicate the default JavaScript behavior except `min` and `max`
which are limited to 2 arguments to satisfy the default arity of RPN calculator.

operator | operation                    | example
:-------:|------------------------------|------------
`+`      | addition                     | `1 2 +` = 3
`-`      | subtraction                  | `1 2 -` = -1
`*`      | multiplication               | `2 3 *` = 6
`/`      | division                     | `7 2 /` = 3.5
`%`      | modulus                      | `12 5 %` = 2
`pow`    | exponentiation               | `7 2 pow` = 49
`max`    | maximum *of two*             | `1 2 max` = 2
`min`    | minimum *of two*             | `1 2 min` = 1
`&`      | bitwise AND                  | `15 9 &` = 9
`|`      | bitwise OR                   | `15 9 |` = 15
`^`      | bitwise XOR                  | `15 9 ^` = 6
`<<`     | left shift                   | `9 2 <<` = 36
`>>`     | sign-propagating right shift | `9 2 >>` = 2
`>>>`    | zero-filled right shift      | `9 2 >>>` = 2

## Tests

```Bash
npm install && npm test
```

## License

http://opensource.org/licenses/mit-license.html