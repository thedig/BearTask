MyTrello.Views.NewList = Backbone.View.extend({
	template: JST['lists/new'],

	events: {
		"submit form": "submit"
	},

	initialize: function(options) {
		this.pos_val = options.pos_val;
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	submit: function(event){
		event.preventDefault();
		var $form = $(event.currentTarget);
		var params = $form.serializeJSON();
		params.list.position = this.pos_val;
		var list = this.collection.create(params["list"], {
			parse: true,
			success: function(){
			}
		});

	}

})