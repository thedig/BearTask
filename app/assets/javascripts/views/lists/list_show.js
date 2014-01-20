MyTrello.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	className: "listDiv",
	id: function() {
		return "list" + this.model.id
	},

	events: {
		"click .list_link": "listLink"
	},

	listLink: function(event) {
		event.preventDefault();
		alert('List settings here');
	},

	render: function() {
		var renderedContent = this.template({
						list_cards: this.model.get('cards'), 
						list: this.model
					});

		this.$el.html(renderedContent);
		return this;
	}

})