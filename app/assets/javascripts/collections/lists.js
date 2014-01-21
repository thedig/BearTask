MyTrello.Collections.Lists = Backbone.Collection.extend({

	comparator: function(item) {
		return item.get('position');
	},

	initialize: function (models, options) {
		this.board_id = options.board_id;
	},

	model: MyTrello.Models.List,
	url: function() {
		return "/boards/" + this.board_id + "/lists";
	},

	parse: function(data){
		return data;
	}

})
