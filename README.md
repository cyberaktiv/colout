# Color Output in NodeJS

Colout is a Node utility that allows you to output color text in console. In the main, it can be used for debugging server applications.

The string to draw attention:
```javascript
colout.red('red message', '\n', {'name': 'test'}, '\n')
	  .green('green message', ' ', [1, 2, 3, 4])
	  .yellow('yellow message ', 'continue message', 123)
	  .error('this is error message')
	  .mySetMethod('message from my method');
```

## Getting started

### Install via npm:
```javascript
npm install colout
```
or 
```javascript
npm install -save colout
```
### Include:
```javascript
var colout = require('colout').genColors();
```
### Example:
When using .genColors () you will be available to eight methods of color output
```javascript
colout.white('white text of message');
colout.red('red text of message');
colout.green('green text of message');
colout.blue('blue text of message');
colout.magenta('magenta text of message');
colout.grey('grey text of message');
colout.yellow('yellow text of message');
colout.cyan('cyan text of message');
```
You also nothing to prevent set methods with their names
```javascript
colout.set('error', 'red')
      .set('warning', 'yellow')
      .set('ok', 'green')
      .set('myMethod', 'cyan');
```
and their use
```javascript
colout.error('This is error message');          // red text
colout.warning('This is warning message');      // yellow text
colout.ok('This is ok message');                // green text
colout.myMethod('This is myMethod message');    // cyan text
```

For all methods (created and inbuilt) supported chained calls
```javascript
colout.red('red').green('green').blue('blue').cyan('cyan');
```
All methods except '.genColors()' supported any number and types of parameters.
```javascript
colout.green('string', 123, [10, '20', 30], true, {'name':'test'}, '\n');
```
Also objects and arrays supported any nesting level
```javascript
var obj = {
	'first': {
		'second':{
			'third':{
				'arr': [
					1, 2, 3, 4, 5
				]
			}	
		}
	}
};
colout.green(obj);
```

It supports eight colors
* `white`
* `red`
* `green`
* `blue`
* `magenta`
* `grey`
* `yellow`
* `cyan`

### !Notes
If the method specified one argument, he adds '\n' at the end to move to the next line (as it does console.log). If this is not what you wanted to use it so
```javascript
colout.red('message', '');
```