MyTrello.Collections.Lists = Backbone.Collection.extend({
	initialize: function (models, options) {
		this.board_id = options.board_id;
	},

	model: MyTrello.Models.List,
	url: function() {
		return "/boards" + this.board_id + "/lists";
	},
	parse: function(data){
		return data;
	}
})