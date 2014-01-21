MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {
		this.listenTo(this.model.get('lists'), "add change remove reset", this.render)
	},

	events: {
		"click #makeNewList": "newList",
		"click #deleteBoard": "boardDelete"
	},

	boardDelete: function(event){
		event.preventDefault();
		this.model.destroy({
			success: function() {
				Backbone.history.navigate("/", {trigger: true});
			}
		});
	
	},

	newList: function(event) {
		event.preventDefault();
		if ($("#allLists div:last").length > 0) {
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
		var renderedContent = this.template({ board: this.model });

		this.$el.html(renderedContent);
		var that = this;
		this.model.get('lists').each(function(list){
			that.$('#allLists').append(new MyTrello.Views.ListShow({model: list}).render().$el)
		});

		return this;
	}

})