MyTrello.Views.AddCardShow = Backbone.View.extend({
	template: JST['cards/add_show'],
	events: {
		"click #makeNewCard": "newCard"
	},

	newCard: function(event) {
		event.preventDefault();
		var position = this.model.get('cards').length
		var view = new MyTrello.Views.NewCard({
			collection: this.model.get('cards'),
			pos_val: position
		});
		this.listenTo(view, "removeAddField", this.render);
		$(event.currentTarget.parentNode).html(view.render().$el);
		this.$('#card_description').focus();
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	}
})