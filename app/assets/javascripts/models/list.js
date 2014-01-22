MyTrello.Models.List = Backbone.Model.extend({

	parse: function(obj) {
		obj.cards = new MyTrello.Collections.Cards(obj.cards, {list_id: obj.id, parse: true})
		return obj;
	},

	validate: function(attributes) {
		if ( attributes.title.length < 1 ){
			return "Needs a title";
		}
	}

})