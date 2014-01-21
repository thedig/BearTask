MyTrello.Views.CardShow = Backbone.View.extend({
	template: JST['cards/show'],
	className: "cardDiv",
	id: function(){
		return "card" + this.model.get('position')
	},

	events: {
		"click .card_link": "cardOpen"
	},

	cardOpen: function(event){
		var cardShow = new MyTrello.Views.CardModalShow({model: this.model});
		this.$el.append(cardShow.render().$el);
		this.$el.modal();
	},

	render: function() {
		this.$el.html(this.template({card: this.model}));

		return this;
	}

})