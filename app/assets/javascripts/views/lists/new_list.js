MyTrello.Views.NewList = Backbone.View.extend({
	template: JST['lists/new'],

	events: {
		"submit form": "submit",
		"mousedown form": "resetTimer",
		"blur #list_title": "newEvent"	
	},

	initialize: function(options) {
		this.pos_val = options.pos_val;
	},

	newEvent: function(){
		var that = this;
		this.timerId = setTimeout(function(){
			that.trigger("removeAddField");
		}, 150);
		
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	resetTimer: function() {
		console.log("reset");
		var that = this;
		setTimeout(function(){
			clearTimeout(that.timerId);
		}, 10);
	},

	submit: function(event){
		event.preventDefault();
		var $form = $(event.currentTarget);
		var params = $form.serializeJSON();
		params.list.position = this.pos_val;
		var list = this.collection.create(params["list"], {
			parse: true,
			success: function(){
			}
		});

	},



})