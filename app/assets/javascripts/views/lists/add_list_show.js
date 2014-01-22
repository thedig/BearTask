MyTrello.Views.AddListShow = Backbone.View.extend({
	template: JST['lists/add_show'],
	className: "listDiv",
	id: "addList",

	events: {
		"click #makeNewList": "newList"
	},

	newList: function(event) {
		event.preventDefault();
		var position = this.model.get('lists').length
		var view = new MyTrello.Views.NewList({
			collection: this.model.get('lists'),
			pos_val: position
		});
		this.listenTo(view, "removeAddField", this.render);
		$(event.currentTarget.parentNode).html(view.render().$el);
		this.$('#list_title').focus();
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	}
})