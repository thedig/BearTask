MyTrello.Views.CardShow = Backbone.View.extend({
	template: JST['cards/show'],
	className: "cardDiv",
	id: function(){
		return "card" + this.model.get('position')
	},

	initialize: function() {
		this.listenTo(this.model, "change reset", this.render)
	},

	events: {
		"click .cardLink": "cardOpen"
	},

	cardOpen: function(event){
		event.preventDefault();
		var cardShow = new MyTrello.Views.CardModalShow({model: this.model});
		this.$el.append(cardShow.render().$el);
		this.$('#card-modal').modal('show');
	},

	render: function() {
		this.$el.html(this.template({card: this.model}));

		return this;
	}

})