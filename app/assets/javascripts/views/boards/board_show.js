MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {
		// this.listenTo(this.model.get('lists'), "add change remove reset", this.render)
	},

	events: {
		// "click .list_link": "showList"
	},

	render: function() {
		var renderedContent = this.template({
						board: this.model
					});

		this.$el.html(renderedContent);
		var that = this;
		this.model.get('lists').each(function(list){
			that.$el.append(new MyTrello.Views.ListShow({model: list}).render().$el)
		});
		return this;
	},

	renderLists: function(element) {

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