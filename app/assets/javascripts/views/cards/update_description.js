MyTrello.Views.UpdateDescription = Backbone.View.extend({
	template: JST['cards/update_description'],

	events: {
	  "click #descriptionEdit": "focus",
		"submit form": "submit"
	},

	focus: function(event){
		$(event.target).focus();
		console.log(event.target);
	},

	render: function(){
		this.$el.html(this.template({card: this.model}));
		return this;
	},

	submit: function(event){
		event.preventDefault();
		var that = this;
		var newDescription = $("#descriptionEdit").val();
		this.model.set({"description": newDescription});
		this.model.save({}, {
			success: function(){
				console.log("model saved");
			}
		});
	}
})