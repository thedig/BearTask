MyTrello.Models.Card = Backbone.Model.extend({

	parse: function(obj) {
		obj.checklists = new MyTrello.Collections.Checklists(
			obj.checklists, 
			{card_id: obj.id, parse: true}
		)
		return obj;
	},

	validate: function(attributes, options) {
		var that = this;
		var msg;
		var fail = false;
		if ( attributes.description.length < 1 ){
			msg = "Needs a description";
			fail = true;
		}

		if (fail) {
			if (options.onFail) options.onFail(msg);
			return msg;
		}
	}

})