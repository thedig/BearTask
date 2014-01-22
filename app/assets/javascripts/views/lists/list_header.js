MyTrello.Views.ListHeader = Backbone.View.extend({
	template: JST['lists/header'],

	render: function(){
		this.$el.html(this.template({list: this.model}));
		return this;
	}

})