MyTrello.Views.BoardNew = Backbone.View.extend({
	template: JST['boards/new'],

	events: {
		"submit form": "submit"
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	submit: function(event){
		event.preventDefault();
		var $form = $(event.currentTarget);
		var params = $form.serializeJSON();
		var board = MyTrello.boards.create(params["board"], {
			success: function(){
				Backbone.history.navigate("/", {trigger: true});
			}
		});
		// var board = new MyTrello.Models.Board(params["board"]);

		// board.save({}, {
			
		// });
	}

});