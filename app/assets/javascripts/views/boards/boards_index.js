MyTrello.Views.BoardsIndex = Backbone.View.extend({
	// tagName: "",
	template: JST['boards/index'],

	initialize: function() {
		this.listenTo(this.collection, "add change remove reset", this.render);
	},

	events: {
		"click .button":"clickButton"
	},

	clickButton: function() {

	},

	render: function() {
		var renderedContent = this.template({
			boards: this.collection
		});

		this.$el.html(renderedContent);
		return this;
	},



})