# Color Output in NodeJS
Colout is a Node utility that allows you to output color text in console. In the main, it can be used for debugging server applications.
## Getting started
### Install via npm:
```javascript
npm install --save colout
```
### Include:
```javascript
var colout = require('colout');
```
### Example:
```javascript
colout.white('white message');
colout.red('red message');
colout.green('green message');
colout.blue('blue message');
colout.magenta('magenta message');
colout.grey('grey message');
colout.yellow('yellow message');
colout.cyan('cyan message');
```
![console output](https://github.com/cyberaktiv/colout/blob/master/test/output.png?raw=true)

You also nothing to prevent set methods with their names
```javascript
colout.set('error', 'red')
      .set('warn', 'yellow')
      .set('ok', 'green')
      .set('myMethod', 'cyan');
```
and their use
```javascript
colout.error('This is red error message');
colout.warn('This is yellow warning message');
colout.ok('This is green ok message');
colout.myMethod('This is cyan myMethod message');
```
If you want to display data in a single row with different colors then use diff ():
```javascript
colout.diff({
    'green': 'string',
      'red': {name: 'object'},
  'magenta': 1234,
   'yellow': [1, 2, 3, 4],
     'cyan': true
});
```
![console output](https://github.com/cyberaktiv/colout/blob/master/test/output_diff.png?raw=true)

Can be used eight standart colors:
* **`white`**
* **`red`**
* **`green`**
* **`blue`**
* **`magenta`**
* **`grey`**
* **`yellow`**
* **`cyan`**

Supported any number and types of parameters:
```javascript
colout.green('string', 123, [10, 20, 30], true, {'name':'obj'});
```
Objects and arrays may be any nesting level:
```javascript
var arr = [10, 20, 30, 40, {'numbers': [1, 2, 3]}];
var obj = {
    'first': {
        'second':{
            'third':{
                'arr': arr
            }   
        }
    }
};
colout.green(obj);
colout.yellow(arr);
```
### Methods:
- **white()**
- **red()**
- **green()**
- **blue()**
- **magenta()**
- **grey()**
- **yellow()**
- **cyan()**
- **set()**
- **diff()**

**`white()`**, **`red()`**, **`green()`**, **`blue()`**, **`magenta()`**, **`grey()`**, **`yellow()`**, **`cyan()`** - paint content in the same color.

**`set(name_method, text_color)`** - make your method.

**`diff()`** - display data in a single row with different colors.