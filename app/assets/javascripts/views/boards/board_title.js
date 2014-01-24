MyTrello.Views.BoardTitle = Backbone.View.extend({
	template: JST['boards/title'],

	events: {
		"blur #boardTitleEdit": "blurForm",
		"mousedown form": "resetTimer",
		"submit form": "submit"
	},

	blurForm: function(){
		var that = this;
		this.timerId = setTimeout(function(){
			that.trigger("removeBoardTitleField");
		}, 150);
	},

	render: function(){
		this.$el.html(this.template({board: this.model}));
		return this;
	},

	resetTimer: function() {
		var that = this;
		setTimeout(function(){
			clearTimeout(that.timerId);
		}, 10);
	},

	submit: function(event){
		var that = this;
		event.preventDefault();
		var newTitle = $("#boardTitleEdit").val();
		this.model.set({"title": newTitle});
		this.model.save({}, {
			success: function(){
				console.log("model saved");
			},
			onFail: function () {
				that.trigger("failedBoardEdit");
			}
		});

	}

})