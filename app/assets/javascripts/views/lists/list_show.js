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
		this.listenTo(this.model.get('cards'), "add change remove reset", this.render)
	},

	listLink: function(event) {
		event.preventDefault();
		alert('List settings here');
	},

	newCard: function(event) {
		event.preventDefault();
		if ($("#allCards div:last").length > 0) {
			var position = parseInt($("#allCards div:last").attr('id')[4]) + 1;
		} else {
			var position = 0;
		}
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