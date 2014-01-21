MyTrello.Collections.Cards = Backbone.Collection.extend({
	
	comparator: function(item){
		return item.get('position');
	},

	initialize: function (models, options) {
		this.list_id = options.list_id;
	},

	model: MyTrello.Models.Card,
	url: function() {
		return "/lists/" + this.list_id + "/cards";
	}

})