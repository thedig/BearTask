MyTrello.Views.CardModalShow = Backbone.View.extend({
	template: JST['cards/modal_show'],
	className: "cardModalDiv",
	id: function(){
		return "cardModal" + this.model.get('position')
	},

	events: {
		"click .deleteCard": "cardDelete"
	},

	cardDelete: function(event){
		event.preventDefault();
	},

	render: function(){
		this.$el.html(this.template({card: this.model}));

		return this;
	}

})