MyTrello.Views.NewCard = Backbone.View.extend({
	template: JST['cards/new'],

	events: {
		"submit form": "submit",
		"mousedown form": "resetTimer",
		"blur #card_description": "newEvent"	
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

	render: function(){
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
		params.card.position = this.pos_val
		var card = this.collection.create(params["card"], {
			parse: true,
			success: function(){
			}
		});
	}

})