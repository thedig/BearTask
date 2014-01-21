MyTrello.Views.CardShow = Backbone.View.extend({
	template: JST['cards/show'],
	className: "cardDiv",
	id: function(){
		return "card" + this.model.get('position')
	},

	render: function() {
		this.$el.html(this.template({card: this.model}));

		return this;
	}

})