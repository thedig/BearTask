MyTrello.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	className: "listDiv",
	attributes: function(){
		return {"data-id": this.model.id};
	},

	events: {
		"click .list_link": "listLink",
		"sortstop": "updateCardOrder"
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
		this.$('#allCards').after(new MyTrello.Views.AddCardShow({model: this.model}).render().$el);

		this.$('#allCards').sortable({ 
			opacity: 0.8,
			cursor: "move",
			delay: 200,
			connectWith: [".cardList"],
			// stop: this.updateCardOrder
		 });

		return this;
	},

	updateCardOrder: function(event, ui){
		event.stopPropagation()
		console.log("card order");
		var cards_coll = this.model.get('cards'); // can't find this collection?
		var $movedLi = $(ui.item);
		
			console.log("card div verified")
			var prevEl = cards_coll.get($($movedLi.prev()[0]).data("id"));
			var nextEl = cards_coll.get($($movedLi.next()[0]).data("id")); 
			var currentEl = cards_coll.get($(ui.item).data("id"));
			var startPos, endPos;
			if (typeof prevEl === 'undefined') {
				startPos = 0;
			}	else {
				startPos = prevEl.get('position');
			}

			if (typeof nextEl === 'undefined') {
				endPos = startPos + 1;
			}	else {
				endPos = nextEl.get('position');
			}

			console.log(startPos);
			console.log(endPos);

			currentEl.set({"position": (startPos + endPos) / 2});
			console.log(currentEl.get('position'));
			currentEl.save({}, {
				success: function(){
					console.log("model saved");
				}
			});
		
	}

})