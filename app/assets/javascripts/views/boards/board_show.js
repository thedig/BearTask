MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {
		// this.listenTo(this.model.get('lists'), "add change remove reset", this.render)
	},

	events: {
		// "click .list_link": "showList"
	},

	render: function() {
		console.log(this.model);
		console.log(this.model.get('lists'));
		var renderedContent = this.template({board_lists: this.model.get('lists'), board: this.model});

		this.$el.html(renderedContent);
		return this;
	},

	// showList: function(event) {
	// 	event.preventDefault();
	// 	var listId = $(event.currentTarget).data('id');
	// 	Backbone.history.navigate('boards/' + this.model.id)
	// }


})