MyTrello.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "boardIndex",
		"hello": "what"
	},

	boardIndex: function(){
		this.$rootEl.html("<h2>TEST TEST TEST</h2>");
	},

	what: function() {
		alert("GAHHHH");
	}

})