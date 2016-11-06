var colout = require('colout');

colout.white('white message');
colout.red('red message');
colout.green('green message');
colout.blue('blue message');
colout.magenta('magenta message');
colout.grey('grey message');
colout.yellow('yellow message');
colout.cyan('cyan message');

colout.set('error', 'red')
      .set('warn', 'yellow')
      .set('ok', 'green')
      .set('myMethod', 'cyan');

colout.error('This is red error message');
colout.warn('This is yellow warning message');
colout.ok('This is green ok message');
colout.myMethod('This is cyan myMethod message');

colout.diff({
    'green': 'string',
      'red': {name: 'object'},
  'magenta': 1234,
   'yellow': [1, 2, 3, 4],
     'cyan': true
});

colout.green('string', 123, [10, 20, 30], true, {'name':'obj'});

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