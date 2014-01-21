MyTrello.Views.NewCard = Backbone.View.extend({
	template: JST['cards/new'],

	events: {
		"submit form": "submit"
	},

	initialize: function(options) {
		// this.pos_val = options.pos_val;
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

	submit: function(event){
		event.preventDefault();
		var $form = $(event.currentTarget);
		var params = $form.serializeJSON();
		// params.card.position = this.pos_val
		var card = this.collection.create(params["card"], {
			parse: true,
			success: function(){
			}
		});
	}

})