MyTrello.Views.UpdateDescription = Backbone.View.extend({
	template: JST['cards/update_description'],

	events: {
	// "click #updateDescription": "submit"
		"keyUp": "processKey",
		"submit form": "submit"
	},

	processKey: function(e) { 
	  if(e.which === 13) { // enter key
	    this.submit();
	  }
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
				that.trigger("renderDescription"); // does nothing?
			}
		});
	}
})