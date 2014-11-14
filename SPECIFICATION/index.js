var test = require('tape');

var holonomy = require('../SOURCE/holonomy.js');

test('require("holonomy") returns an object', function(assert) {
  // give 'clilib' a "--debug" flag to print out
  // the "command" instead of executing the "action"
  assert.strictEqual(typeof holonomy, 'object');
  assert.end();
});

test('> holonomy help <command>', function(assert) {
  assert.strictEqual(holonomy.awesome(), 'awesome');
  assert.end();
});
test('> holonomy h <command>', function(assert) {
  assert.strictEqual(holonomy.awesome(), 'awesome');
  assert.end();
});
test('> holonomy --help <command>', function(assert) {
  assert.strictEqual(holonomy.awesome(), 'awesome');
  assert.end();
});
test('> holonomy --h <command>', function(assert) {
  assert.strictEqual(holonomy.awesome(), 'awesome');
  assert.end();
});

test('> holonomy init', function(assert) {
  assert.strictEqual(holonomy.awesome(), 'awesome');
  assert.end();
});
test('> holonomy init <directory>', function(assert) {
  assert.strictEqual(holonomy.awesome(), 'awesome');
  assert.end();
});
