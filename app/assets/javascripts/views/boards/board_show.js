MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {
		this.listenTo(this.model.get('lists'), "add change remove reset", this.render);

	},

	events: {
		"click #makeNewList": "newList",
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

	newList: function(event) {
		event.preventDefault();
		console.log('here, re-invoking newList');
		var position = this.model.get('lists').length
		var view = new MyTrello.Views.NewList({
			collection: this.model.get('lists'),
			pos_val: position
		});
		this.listenTo(view, "removeAddField", this.render);
		$(event.currentTarget.parentNode).html(view.render().$el);
		this.$('#list_title').focus();
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