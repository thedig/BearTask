MyTrello.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "boardIndex",
		"boards/new": "boardNew",
		"boards/:id/edit": "boardEdit",
		"boards/:id": "boardShow"
	},

	boardIndex: function() {
		var view = new MyTrello.Views.BoardsIndex({collection: MyTrello.boards});
		this.$rootEl.html(view.render().$el);
	},

	boardShow: function(id) {
		var board = MyTrello.boards.get(id);
		var view = new MyTrello.Views.BoardShow({model: board});
		this.$rootEl.html(view.render().$el);
	}

})