MyTrello.Models.List = Backbone.Model.extend({

	parse: function(obj) {
		obj.cards = new MyTrello.Collections.Cards(obj.cards, {list_id: obj.id})
		return obj;
	}

})