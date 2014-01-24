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
			}
		});
	},

	render: function(){
		this.$el.html(this.template({board: this.model}));
		return this;
	}

})