// this file isn't transplied, so must use commonJs and ES5

//register babel  to transpile before our test  runs.
require('@babel/register')();

//disable webpack features that mocha  doesn't understand
require.extensions['.css'] = function() {};
