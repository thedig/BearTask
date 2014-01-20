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
		this.renderLists(this.$el);
		// this.$el.append("<br>HELLO");
		return this;
	},

	renderLists: function(element) {
		$(".listDiv").remove();

		board_lists = this.model.get('lists');

		board_lists.each(function(list){
			element.append("<div class='listDiv' id='list" + list.id + "'>" + 
					list.get('title')
					 + "</div>")
		})
	}

	// showList: function(event) {
	// 	event.preventDefault();
	// 	var listId = $(event.currentTarget).data('id');
	// 	Backbone.history.navigate('boards/' + this.model.id)
	// }


})