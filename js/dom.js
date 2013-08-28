var DOM = {
	"version": 0.1,
	"name": "DOM",
	"description": "A simple DOM library",
	"author": "James Blades",
	"contributors": [
		"James Blades"
	],
	init: function(){
		var e = Element;
		if(!e){
			throw "Error - Unsupported browser";
		}
		e.prototype.after = function(ele){
			if(ele){
				this.parent().insertBefore(ele, this.next());
			}
			return this.next();
		};
		e.prototype.append = function(ele){
			this.appendChild(ele);
		};
		e.prototype.before = function(ele){
			if(ele){
				this.parent().insertBefore(ele, this);
			}
			return this.previous();
		};
		e.prototype.clone = function(){
			return this.cloneNode(true);
		};
		e.prototype.create = DOM.create;
		e.prototype.first = function(){
			var current = this.firstChild;
			while(String(current.appendData).substr(0, 9) === "function"){
				current = this.previous();
			}
			return current;
		};
		e.prototype.last = function(){
			var current = this.lastChild;
			while(String(current.appendData).substr(0, 9) === "function"){
				current = this.previous();
			}
			return current;
		};
		e.prototype.next = function(){
			return this.nextSibling;
		};
		e.prototype.parent = function(){
			return this.parentNode;
		};
		e.prototype.prepend = function(ele){
			this.insertBefore(ele, this.first());
		};
		e.prototype.previous = function(){
			return this.previousSibling;
		};
		e.prototype.remove = function(ele){
			this.parent().removeChild(this);
		};
		e.prototype.text = DOM.create;
	},
	create: function(tag){
		return document.createElement(tag);
	},
	text: function(str){
		return document.createTextNode(str);
	}
};
