var colout = require('colout');

colout.white('white message').endl();
colout.red('red message').endl();
colout.green('green message').endl();
colout.blue('blue message').endl();
colout.magenta('magenta message').endl();
colout.grey('grey message').endl();
colout.yellow('yellow message').endl();
colout.cyan('cyan message').endl();

colout.set('error', 'red')
      .set('warning', 'yellow')
      .set('ok', 'green')
      .set('myMethod', 'cyan');

colout.error('This is red error message').endl();
colout.warning('This is yellow warning message').endl();
colout.ok('This is green ok message').endl();
colout.myMethod('This is cyan myMethod message').endl();

colout.red('red').green('green').blue('blue').cyan('cyan').endl();

colout.green('string1', 1, [10, 20], true, {'name':'test1'}).endl()
      .yellow('string2', 2, [30, 40], false, {'name':'test2'}).endl()
      .cyan('string3', 3, [50, 60], true, {'name':'test3'}).endl()
      .red('string4', 4, [70, 80], false, {'name':'test4'}).endl();

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

colout.green('message', '\n');
colout.green('message').endl();