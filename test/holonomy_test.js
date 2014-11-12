/*global describe,it*/
'use strict';
var assert = require('assert'),
  holonomy = require('../lib/holonomy.js');

describe('holonomy node module.', function() {
  it('must be awesome', function() {
    assert( holonomy.awesome(), 'awesome');
  });
});
