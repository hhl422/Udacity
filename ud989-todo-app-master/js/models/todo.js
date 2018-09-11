/*global Backbone */
var app = app || {};//如果应用不存在，设置应用等于一个新的空对象

//立即执行函数 
// IIFE（立即调用的函数表达式） 	https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			priority: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},

		togglePriority: function () {
			this.save({
				priority: !this.get('priority')
			});
		}
	});
})();
