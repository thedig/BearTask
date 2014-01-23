MyTrello.Views.ListTitle = Backbone.View.extend({

	template: JST['lists/title'],

	events: {
		"submit form": "submit"
	},

	render: function(){
		this.$el.html(this.template({list: this.model}));
		return this;
	},

	submit: function(event){
		event.preventDefault();
		var that = this;
		var newTitle = $("#listTitleEdit").val();
		this.model.set({"title": newTitle});
		this.model.save({}, {
			success: function(){
				console.log("list model saved");
			}
		});
	}

})