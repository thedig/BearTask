MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],

	initialize: function() {
		this.listenTo(this.model.get('lists'), "add change remove reset", this.render);

	},

	events: {
		"click #deleteBoard": "boardDelete",
		"sortstop": "updateListOrder"
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
			// stop: this.updateOrder
		});

		return this;
	},

	updateListOrder: function(event, ui){
		console.log("update list order");
		var lists_coll = this.model.get('lists');
		var $movedLi = $(ui.item);
			
		var prevEl = lists_coll.get($($movedLi.prev()[0]).data("id"));
		var nextEl = lists_coll.get($($movedLi.next()[0]).data("id")); 
		var currentEl = lists_coll.get($(ui.item).data("id"));
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