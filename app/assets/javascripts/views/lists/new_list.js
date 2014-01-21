MyTrello.Views.NewList = Backbone.View.extend({
	template: JST['lists/new'],

	events: {
		"submit form": "submit"
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	submit: function(event){
		event.preventDefault();
		var $form = $(event.currentTarget);
		var params = $form.serializeJSON();
		console.log(this.pos_val);
		var list = this.collection.create(params["list"], {
			parse: true,
			success: function(){
			}
		});
	}

})