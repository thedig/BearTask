MyTrello.Views.ListTitle = Backbone.View.extend({

	template: JST['lists/title'],

	events: {
		"blur #listTitleEdit": "blurForm",
		"mousedown form": "resetTimer",
		"submit form": "submit"
	},

	blurForm: function(){
		var that = this;
		this.timerId = setTimeout(function(){
			that.trigger("removeListTitleField");
		}, 150);
	},

	render: function(){
		this.$el.html(this.template({list: this.model}));
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
		var newTitle = $("#listTitleEdit").val();
		this.model.set({"title": newTitle});
		this.model.save({}, {
			success: function(){
				console.log("list model saved");
			},
			onFail: function () {
				that.trigger("failedListEdit");
			}
		});

	}

})