MyTrello.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	className: "listDiv",
	id: function() {
		return "list" + this.model.get('position')
	},

	events: {
		"click .list_link": "listLink",
		"click #makeNewCard": "newCard"
	},

	initialize: function(){
		this.listenTo(this.model.get('cards'), "add change remove reset", this.render)
	},

	listLink: function(event) {
		event.preventDefault();
		alert('List settings here');
	},

	newCard: function(event) {
		event.preventDefault();
		var view = new MyTrello.Views.NewCard({
			collection: this.model.get('cards')
		});
		$(event.currentTarget.parentNode).html(view.render().$el);

	},

	render: function() {
		var renderedContent = this.template({
						list: this.model
					});

		this.$el.html(renderedContent);
		return this;
	}

})