MyTrello.Collections.Checklists = Backbone.Collection.extend({
	initialize: function (models, options) {
		this.card_id = options.card_id;
	},

	model: MyTrello.Models.Checklist,
	url: function() {
		return "/cards/" + this.card_id + "/checklists";
	}
		
})