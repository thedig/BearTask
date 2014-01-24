MyTrello.Views.NewCard = Backbone.View.extend({
	template: JST['cards/new'],

	events: {
		"blur #card_description": "blurForm",
		"mousedown form": "resetTimer",
		"submit form": "submit",
		"keydown #card_description": "processKey"
	},

	initialize: function(options) {
		this.pos_val = options.pos_val;
	},

	blurForm: function(e){
		var that = this;
		if(e.which !== 9) {
			this.timerId = setTimeout(function(){
				that.trigger("removeAddField");
			}, 150);
		}
	},

	processKey: function(e){
	  if(e.which === 13) {
	    this.submit(e);
	  }
	  if(e.which === 9) {
	    this.resetTimer();
	  }

	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

	resetTimer: function(delay) {
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