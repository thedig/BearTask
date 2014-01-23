MyTrello.Views.AddListShow = Backbone.View.extend({
	template: JST['lists/add_show'],
	className: "listDiv box",
	id: "addList",

	events: {
		"click #makeNewList": "newList"
	},

	newList: function(event) {
		event.preventDefault();
		var position = this.model.get('lists').length + 1
		var view = new MyTrello.Views.NewList({
			collection: this.model.get('lists'),
			pos_val: position
		});
		this.listenTo(view, "removeAddField", this.render);
		this.listenTo(view, "failedListAdd", this.refocus);
		$(event.currentTarget.parentNode).html(view.render().$el);
		this.refocus();
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	refocus: function () {
		this.$('#list_title').focus();
	}
})