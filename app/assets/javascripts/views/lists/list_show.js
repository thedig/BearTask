MyTrello.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	className: "listDiv",
	id: function() {
		return "list" + this.model.get('position')
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
						list: this.model
					});

		this.$el.html(renderedContent);
		return this;
	}

})