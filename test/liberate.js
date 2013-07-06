var assert      = require('assert')
  , liberate    = require('../')
  , map         = liberate(Array.prototype.map)
  , plusOne     = function (x) { return x + 1 }

assert.deepEqual(map([1, 2, 3], plusOne), [2, 3, 4])
