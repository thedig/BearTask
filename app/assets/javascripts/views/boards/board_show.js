MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {
		this.listenTo(this.model.get('lists'), "add change remove reset", this.render);

	},

	events: {
		"click #deleteBoard": "boardDelete",
	},

	boardDelete: function(event){
		event.preventDefault();
		this.model.destroy({
			success: function() {
				Backbone.history.navigate("/", {trigger: true});
			}
		});
	
	},

	render: function() {
		var renderedContent = this.template({ board: this.model });

		this.$el.html(renderedContent);
		var that = this;
		this.model.get('lists').each(function(list){
			that.$('#allLists').append(new MyTrello.Views.ListShow({model: list}).render().$el)
		});

		that.$('#allLists').append(new MyTrello.Views.AddListShow({model: this.model}).render().$el)

		return this;
	}

})