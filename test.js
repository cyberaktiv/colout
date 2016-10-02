var colout = require('colout').genColors();

colout.white('white text of message')
	  .red('red text of message')
	  .green('green text of message')
	  .blue('blue text of message')
	  .magenta('magenta text of message')
	  .grey('grey text of message')
	  .yellow('yellow text of message')
	  .cyan('cyan text of message');

colout.set('error', 'red')
      .set('warning', 'yellow')
      .set('ok', 'green')
      .set('myMethod', 'cyan');

colout.error('This is error message')
	  .warning('This is warning message')
	  .ok('This is ok message')
	  .myMethod('This is myMethod message');

colout.red('red').green('green').blue('blue').cyan('cyan');

colout.green('string', 123, [10, '20', 30], true, {'name':'test'}, '\n');

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
