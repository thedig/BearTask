MyTrello.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "boardIndex",
		"boards": "boardIndex",
		// "boards/new": "boardNew",
		// "boards/:id/edit": "boardEdit",
		"boards/:id": "boardShow"
	},

	boardIndex: function() {
		var view = new MyTrello.Views.BoardsIndex({collection: MyTrello.boards});
		this.$rootEl.html(view.render().$el);
	},

	boardShow: function(id) {
		var board = MyTrello.boards.get(id);
		MyTrello.boards.each(function(b){
			console.log(b.get('title'));
			console.log("HI HI HI");
		})
		if (!board) {
			this.boardIndex();
		} else {
			var view = new MyTrello.Views.BoardShow({model: board});
			this.$rootEl.html(view.render().$el);
			// this._swapView(view);	
		}
		
	},

  // _swapView: function(view){
  //   this._currentView && this._currentView.remove();
  //   this._currentView = view;
  //   this.$rootEl.html(view.render().$el);
  // }


})