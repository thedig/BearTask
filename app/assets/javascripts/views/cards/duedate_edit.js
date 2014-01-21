MyTrello.Views.DueDate = Backbone.View.extend({
	template: JST['cards/duedate'],

	events: {
		"submit form": "submit"
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

	submit: function(event){
		event.preventDefault();
		alert("editing!");
	}

})