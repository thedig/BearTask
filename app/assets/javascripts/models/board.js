MyTrello.Models.Board = Backbone.Model.extend({
	
	parse: function(obj) {
		obj.lists = new MyTrello.Collections.Lists(obj.lists, {board_id: obj.id, parse: true});
		return obj;
	},

	validate: function(attributes) {
		if ( attributes.title.length < 1 ){
			return "Needs a title";
		}
	}

})