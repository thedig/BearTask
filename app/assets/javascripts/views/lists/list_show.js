MyTrello.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	className: "listDiv",
	id: function() {
		return "list" + this.model.get('position')
	},

	events: {
		"click .list_link": "listLink"
	},

	initialize: function(){
		this.listenTo(this.model.get('cards'), "add remove reset", this.render)
	},

	listLink: function(event) {
		event.preventDefault();
		alert('List settings here');
	},

	render: function() {
		var renderedContent = this.template({
						list: this.model
					});

		this.$el.html(renderedContent);
		var that = this;
		this.$('#allCards').before(new MyTrello.Views.ListHeader({model: this.model}).render().$el);

		this.model.get('cards').each(function(card){
			that.$('#allCards').append(new MyTrello.Views.CardShow({model: card}).render().$el);
		});

		this.$('#allCards').append(new MyTrello.Views.AddCardShow({model: this.model}).render().$el);

		return this;
	}

})