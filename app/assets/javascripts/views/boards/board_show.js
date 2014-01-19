MyTrello.Views.BoardShow = Backbone.View.extend(
	template: JST['boards/show'],

	initialize: function() {
		this.listenTo(this.model.get('lists'), "add change remove reset", this.render)
	},

	events: {
		"click .list_link": "showList"
	},

	render: function() {
		// board_lists = this.model.get('lists');
		// console.log(typeof board_lists);
		// console.log(board_lists);
		// list_array = [];
		// var i = 0;
		// while (i < board_lists.length) {
		// 	board_lists.doEach(function(list){
		// 		if (list.position === i) {
		// 			list_array.push(list);
		// 			i++;
		// 		}
		// 	})
		// }
		
		var renderedContent = this.template({board_lists: this.model.lists, board: this.model});

		this.$el.html(renderedContent);
		return this;
	},

	showList: function(event) {
		event.preventDefault();
		var listId = $(event.currentTarget).data('id');
		Backbone.history.navigate('boards/' + this.model.id)
	}


})