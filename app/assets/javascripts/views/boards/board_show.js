MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {
		this.listenTo(this.model.get('lists'), "add change remove reset", this.render);

	},

	events: {
		"click #deleteBoard": "boardDelete",
		"sortstop": "updateOrder"
	},

	boardDelete: function(event){
		event.preventDefault();
		this.model.destroy({
			success: function() {
				Backbone.history.navigate("/", {trigger: true});
			}
		});
	
	},

	render: function() {
		var renderedContent = this.template({ board: this.model });

		this.$el.html(renderedContent);
		var that = this;
		this.model.get('lists').each(function(list){
			that.$('#allLists').append(new MyTrello.Views.ListShow({model: list}).render().$el)
		});
		this.$('#allLists').after(new MyTrello.Views.AddListShow({model: this.model}).render().$el)
		this.$('#allLists').sortable({ 
			opacity: 0.8,
			cursor: "move",
			delay: 200,
			// connectWith: ".listDiv",
			stop: this.updateOrder
		});

		return this;
	},

	updateOrder: function(){
		console.log("position???")
	}

})