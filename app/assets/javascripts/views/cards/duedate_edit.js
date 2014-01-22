MyTrello.Views.DueDate = Backbone.View.extend({
	template: JST['cards/duedate'],

	events: {
		"submit form": "submit"
	},

	render: function(){
		this.$el.html(this.template({card: this.model}));
		return this;
	},

	submit: function(event){
		event.preventDefault();
		var newDueDate = $("#dueDate").val();
		this.model.set({"due_date": newDueDate});
		this.model.save({}, {
			success: function(){
				console.log("model saved");
			}
		});
	}

})