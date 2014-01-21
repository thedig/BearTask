MyTrello.Collections.Boards = Backbone.Collection.extend({
	model: MyTrello.Models.Board,
	url: "/boards/"
})