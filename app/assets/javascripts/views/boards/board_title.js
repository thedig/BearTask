MyTrello.Views.BoardTitle = Backbone.View.extend({
	template: JST['boards/title'],

	events: {
		"blur #boardTitleEdit": "blurForm",
		"submit form": "submit"
	},

	blurForm: function(){
		console.log("BLUR")
	},

	render: function(){
		this.$el.html(this.template({board: this.model}));
		return this;
	},

	submit: function(event){
		event.preventDefault();
		var that = this;
		var newTitle = $("#boardTitleEdit").val();
		this.model.set({"title": newTitle});
		this.model.save({}, {
			success: function(){
				console.log("model saved");
			}
		});
	}

})