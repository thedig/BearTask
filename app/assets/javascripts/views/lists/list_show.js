MyTrello.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	className: "listDiv box",
	attributes: function(){
		return {"data-id": this.model.id};
	},

	events: {
		"click .listTitle": "titleEdit",
		"sortstop": "updateCardOrder",
		"hidden.bs.modal": "render"
	},

	initialize: function(){
		this.listenTo(this.model.get('cards'), "add remove reset", this.render);
		this.listenTo(this.model, "reset change sync", this.render);
	},

	titleEdit: function(event) {
		var view = new MyTrello.Views.ListTitle({model: this.model});
		$(event.currentTarget.parentNode).html(view.render().$el);
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
		 });

		return this;
	},

	updateCardOrder: function(event, ui){
		event.stopPropagation()
		var cards_coll = this.model.get('cards');
		var $movedEl = $(ui.item);

		var prevEl = cards_coll.get($($movedEl.prev()[0]).data("id"));
		var nextEl = cards_coll.get($($movedEl.next()[0]).data("id"));
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

		var parentListId = $(ui.item).parent().parent().data('id');

		currentEl.set({"position": (startPos + endPos) / 2});
		currentEl.set({"list_id": parentListId});

		currentEl.save({}, {
			success: function(){
			}
		});
	}

})