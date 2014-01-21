MyTrello.Models.Card = Backbone.Model.extend({

	parse: function(obj) {
		obj.checklists = new MyTrello.Collections.Checklists(
			obj.checklists, 
			{card_id: obj.id, parse: true}
		)
		return obj;
	}

})