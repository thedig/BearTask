MyTrello.Views.ListHeader = Backbone.View.extend({
	template: JST['lists/header'],
	id: "listHeader",
	
	events: {
		"click #deleteList": "listDelete",
	},

	listDelete: function(event){
		event.preventDefault();
		this.model.destroy({
			success: function() {
			}
		});
	},

	render: function(){
		this.$el.html(this.template({list: this.model}));
		return this;
	}

})