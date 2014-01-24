MyTrello.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	className: "windowDiv",

	initialize: function() {
		this.listenTo(this.model.get('lists'), "add change remove reset", this.render);
		this.listenTo(this.model, "change reset update sync", this.render);
	},

	events: {
		"click #deleteBoard": "boardDelete",
		"click .boardTitle": "titleEdit",
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
		that.model.get('lists').sort();

		this.$('#allLists').before(new MyTrello.Views.BoardHeader({model: this.model}).render().$el);

		this.model.get('lists').each(function(list){
			that.$('#allLists').append(new MyTrello.Views.ListShow({model: list}).render().$el)
		});

		this.$('#allLists').after(new MyTrello.Views.AddListShow({model: this.model}).render().$el)
		this.$('#allLists').sortable({
			opacity: 0.8,
			cursor: "move",
			delay: 200,
		});

		return this;
	},

	titleEdit: function(event){
		var view = new MyTrello.Views.BoardTitle({model: this.model});
		$(event.currentTarget.parentNode).html(view.render().$el);
	},

	updateListOrder: function(event, ui){
		var that = this;
		var lists_coll = this.model.get('lists');
		var $movedEl = $(ui.item);

		var prevEl = lists_coll.get($($movedEl.prev()[0]).data("id"));
		var nextEl = lists_coll.get($($movedEl.next()[0]).data("id"));
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

		currentEl.set({"position": (startPos + endPos) / 2});
		currentEl.save({}, {
			success: function(){
				that.model.get('lists').sort();
			}
		});

	}

})