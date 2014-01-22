MyTrello.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	className: "listDiv",
	id: function() {
		return "list" + this.model.get('position')
	},

	events: {
		"click .list_link": "listLink",
		"click #makeNewCard": "newCard"
	},

	initialize: function(){
		this.listenTo(this.model.get('cards'), "add remove reset", this.render)
	},

	listLink: function(event) {
		event.preventDefault();
		alert('List settings here');
	},

	newCard: function(event) {
		event.preventDefault();
		var position = this.model.get('cards').length;
		var view = new MyTrello.Views.NewCard({
			collection: this.model.get('cards'),
			pos_val: position
		});
		$(event.currentTarget.parentNode).html(view.render().$el);

	},

	render: function() {
		var renderedContent = this.template({
						list: this.model
					});

		this.$el.html(renderedContent);
		var that = this;
		this.model.get('cards').each(function(card){
			that.$('#allCards').append(new MyTrello.Views.CardShow({model: card}).render().$el)
		});

		return this;
	}

})