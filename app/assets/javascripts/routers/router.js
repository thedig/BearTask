MyTrello.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "boardIndex",
		"boards": "boardIndex",
		"boards/new": "boardNew",
		"boards/:id": "boardShow"
	},

	boardIndex: function() {
		var view = new MyTrello.Views.BoardsIndex({collection: MyTrello.boards});
		this.$rootEl.html(view.render().$el);
	},

	boardNew: function() {
		var view = new MyTrello.Views.BoardNew();
		this._swapView(view);
	},

	boardShow: function(id) {
		var board = MyTrello.boards.findWhere({slug: id});
		// var board = MyTrello.boards.get(id);
		if (!board) {
			this.boardIndex();
		} else {
			var view = new MyTrello.Views.BoardShow({model: board});
			this._swapView(view);
		}

	},

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }


})