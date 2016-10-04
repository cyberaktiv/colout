# Color Output in NodeJS
![console output](https://github.com/cyberaktiv/colout/blob/master/test/output.png?raw=true)

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
colout.white('white message').endl();
colout.red('red message').endl();
colout.green('green message').endl();
colout.blue('blue message').endl();
colout.magenta('magenta message').endl();
colout.grey('grey message').endl();
colout.yellow('yellow message').endl();
colout.cyan('cyan message').endl();
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
colout.error('This is red error message').endl();
colout.warning('This is yellow warning message').endl();
colout.ok('This is green ok message').endl();
colout.myMethod('This is cyan myMethod message').endl();
```
Can be used eight standart colors:
* **`white`**
* **`red`**
* **`green`**
* **`blue`**
* **`magenta`**
* **`grey`**
* **`yellow`**
* **`cyan`**

For all methods (created and inbuilt) supported chained calls:
```javascript
colout.red('red').green('green').blue('blue').cyan('cyan').endl();
```
Supported any number and types of parameters:
```javascript
colout.green('string1', 1, [10, 20], true, {'name':'test1'}).endl()
      .yellow('string2', 2, [30, 40], false, {'name':'test2'}).endl()
      .cyan('string3', 3, [50, 60], true, {'name':'test3'}).endl()
      .red('string4', 4, [70, 80], false, {'name':'test4'}).endl();
```
Objects and arrays may be any nesting level:
```javascript
var arr = [10, 20, 30, 40, 50];
var obj = {
    'first': {
        'second':{
            'third':{
                'arr': arr
            }   
        }
    }
};
colout.green(arr).yellow(obj).endl();
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
- **endl()**

**white(), red(), green(), blue(), magenta(), grey(), yellow(), cyan()** - paint content in the same color.

**set(<name_method>, <text_color>)** - make your method.

**endl()** - add newline character (if necessary use). For example these records are the same:
```javascript
colout.green('message', '\n');
colout.green('message').endl();
```

