MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {
		this.listenTo(this.model.get('lists'), "add change remove reset", this.render)
	},

	events: {
		"click #makeNewList": "newList"
	},

	newList: function(event) {
		event.preventDefault();
		console.log($("#allLists div:last"));
		if ($("#allLists div:last")) {
			var position = parseInt($("#allLists div:last").attr('id')[4]) + 1;
		} else {
			var position = 0;
		}
		var view = new MyTrello.Views.NewList({
			collection: this.model.get('lists'),
			pos_val: position
		});
		$(event.currentTarget.parentNode).html(view.render().$el);
	},

	render: function() {
		var renderedContent = this.template({
						board: this.model
					});

		this.$el.html(renderedContent);
		var that = this;
		this.model.get('lists').each(function(list){
			that.$('#allLists').append(new MyTrello.Views.ListShow({model: list}).render().$el)
		});

		return this;
	}

	// showList: function(event) {
	// 	event.preventDefault();
	// 	console.log("From board show");	
	// 	var listId = $(event.currentTarget).data('id');
	// 	Backbone.history.navigate('boards/' + this.model.id)
	// }


})