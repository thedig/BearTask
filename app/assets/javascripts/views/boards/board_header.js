MyTrello.Views.BoardHeader = Backbone.View.extend({
	template: JST['boards/header'],
	id: "boardHeader",

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

	render: function(){
		this.$el.html(this.template({board: this.model}));
		return this;
	}

})