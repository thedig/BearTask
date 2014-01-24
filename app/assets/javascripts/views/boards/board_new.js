MyTrello.Views.BoardNew = Backbone.View.extend({
	template: JST['boards/new'],
	className: "windowDiv",

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
		var board = MyTrello.boards.create(params["board"], {
			validate: true,
			success: function(){
				Backbone.history.navigate("/", {trigger: true});
			}
		});

	}

});