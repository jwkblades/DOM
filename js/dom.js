/*
###############################################################################
# Copyright (c) 2013 James Blades <jwkblades@gmail.com>
# 
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# 'Software'), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
# 
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software, and 
# that credit be given where credit is due.
# 
# THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
# IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
# CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
# TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
# SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
###############################################################################
*/
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
