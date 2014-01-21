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


	// comparator: function(item) {
		// a = a.get(this.sort_key);
		// b = b.get(this.sort_key);
		// return a > b ?	1
		// 		 : a < b ? -1
		// 		 : 					0;
	// 	return item.get(this.sort_key);
	// },

	// sortByField: function(fieldName) {
	// 	this.sort_key = fieldName;
	// 	this.sort();
	// },

	// sort_key = 'id',