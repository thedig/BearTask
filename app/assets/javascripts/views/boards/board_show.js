MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {

	},

	events: {
		"click list_link": "showList"
	},

	render: function() {
		board_lists = this.model.get('lists');
		list_array = [];
		var i = 0;
		while (i < board_lists.length) {
			board_lists.each(function(list){
				if (list.position === i) {
					list_array.push(list);
					i++;
				}
			})
		}
		
		this.$el.html(this.template({
			board_lists: this.model.get('lists'),
			board: this.model
		}));
		return this;
	},

	showList: function(event) {
		event.preventDefault();
		var listId = $(event.currentTarget).data('id');
		Backbone.history.navigate('boards/' + this.model.id + )
	}


})