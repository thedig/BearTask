MyTrello.Models.Board = Backbone.Model.extend({
	
	parse: function(obj) {
		obj.lists = new MyTrello.Collections.Lists(obj.lists, {board_id: obj.id})

		return obj;
	}


})