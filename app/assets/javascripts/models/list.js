MyTrello.Models.List = Backbone.Model.extend({
	initialize: function() {

	},

	parse: function(obj) {
		obj.cards = new MyTrello.Collections.Cards(obj.cards, {list_id: obj.id})

		return obj;
	}

})