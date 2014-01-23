MyTrello.Views.AddCardShow = Backbone.View.extend({
	template: JST['cards/add_show'],
	className: "cardDiv box",
	id: "addCard",
	events: {
		"click #makeNewCard": "newCard"
	},

	newCard: function(event) {
		event.preventDefault();
		var position = this.model.get('cards').length + 1
		var view = new MyTrello.Views.NewCard({
			collection: this.model.get('cards'),
			pos_val: position
		});
		this.listenTo(view, "removeAddField", this.render);
		this.listenTo(view, "failedCardAdd", this.refocus);
		$(event.currentTarget.parentNode).html(view.render().$el);
		this.refocus();
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	refocus: function () {
		this.$('#card_description').focus();
	}
})