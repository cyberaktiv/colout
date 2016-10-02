/*
	Colout
	author: cyberaktiv@yandex.ru
*/

var util = require('util');

var Message = {
	'error': function(msg){
		this.print('\nERROR: '+ msg + '\n\n', 'red');
	},
	'print': function(msg, color){
		var color = (Colors.inList(color))?color:'white';
		var text_color = util.inspect.colors[color][0];
		var out = ``;
		if(typeof msg === 'object'){
			out = `\x1b[${text_color}m${util.inspect(msg, {depth: null })}\x1b[0m`;
		} else {
			out = `\x1b[${text_color}m${msg}\x1b[0m`;
		}
		process.stdout.write(out);
	},
};

var Colors = {
	'list': ['green','red','grey','blue','magenta','white','yellow','cyan'],
	'inList': function(c){
		return (typeof c === 'string' && this.list.indexOf(c) != -1)?true:false;
	},
};

var Valid = {
	'name': function(name){
		if(!name || (typeof name !== 'string')){
			Message.error('not set or incorrect name of function');
			return false;
		}
		return true;
	},
	'color': function(color){
		if(!Colors.inList(color)){
			Message.error('color "'+ color +'" is not exists');
			return false;
		} else if(typeof color !== 'string'){
			Message.error('"'+ color +'" is not a string');
			return false;
		}
		return true;
	},
};

var _exports = {
	set: function(name, color){
		
		if(!Valid.name(name)) return;
		color = (color && Valid.color(color))?color:'white';
		
		this[name] = function(){
			var args = [].slice.call(arguments);
			for(var i = 0; i < args.length; i++){
				Message.print(args[i], color);
			}
			if(args.length === 1) Message.print('\n');
			return this;
		};
		return this;
	},
	genColors: function(){
		var self = this;
		Colors.list.forEach(function(color){
			self.set(color, color);
		});
		return this;
	},
};

module.exports = _exports;