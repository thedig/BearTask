MyTrello.Models.Board = Backbone.Model.extend({

	parse: function(obj) {
		obj.lists = new MyTrello.Collections.Lists(obj.lists, {board_id: obj.id, parse: true});
		return obj;
	},

	validate: function(attributes, options) {
		var that = this;
		var msg;
		var fail = false;
		if ( attributes.title.length < 1 ){
			msg = "Needs a title";
			fail = true;
		}

		if (fail) {
			if (options.onFail) options.onFail(msg);
			return msg;
		}
	}

})