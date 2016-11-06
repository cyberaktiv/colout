/*
	Colout
	author: cyberaktiv@yandex.ru
*/

var util = require('util');

var Message = {
	'error': function(msg){
		this.print('\nERROR from "colout": '+ msg + '\n\n', 'red');
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

var Colout = function(){
	var self = this;
	this.set = function(name, color){
		
		if(!Valid.name(name)) return;
		color = (color && Valid.color(color))?color:'white';
		this[name] = function(){
			var args = [].slice.call(arguments);
			for(var i = 0; i < args.length; i++){
				Message.print(args[i], color);
				process.stdout.write(' ');
			}
			process.stdout.write('\n');
		};
		return this;
	};
	this.endl = function(){
		process.stdout.write('\n');
		return this;
	};
	this.diff = function(data){
		if(typeof data === 'object' && !Array.isArray(data)){
			for(var color in data){
				if(Colors.inList(color)){
					Message.print(data[color], color);
					process.stdout.write(' ');
				} else {
					Message.error('color "'+ color +'" is not exists, in method diff()');
					process.stdout.write('\n');
				}
			}
			process.stdout.write('\n');
		} else {
			Message.error('incorrect format of data for diff() method');
		}
	};
	var genColors = function(obj){
		Colors.list.forEach(function(color){
			obj.set(color, color);
		});
	};
	genColors(this);
};

module.exports = new Colout();