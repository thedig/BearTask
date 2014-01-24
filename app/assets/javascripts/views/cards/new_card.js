MyTrello.Views.NewCard = Backbone.View.extend({
	template: JST['cards/new'],

	events: {
		"blur #card_description": "blurForm",
		"mousedown form": "resetTimer",
		"submit form": "submit"
	},

	initialize: function(options) {
		this.pos_val = options.pos_val;
	},

	blurForm: function(){
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
		var that = this;
		setTimeout(function(){
			clearTimeout(that.timerId);
		}, 10);
	},

	submit: function(event){
		var that = this;
		event.preventDefault();
		var $form = $(event.currentTarget);
		var params = $form.serializeJSON();
		params.card.position = this.pos_val;
		var card = this.collection.create(params["card"], {
			parse: true,
			validate: true,
			success: function(){
			},
			onFail: function () {
				that.trigger("failedCardAdd");
			}
		});
	}

})