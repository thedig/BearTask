window.MyTrello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MyTrello.boards = new MyTrello.Collections.Boards();
    MyTrello.boards.fetch({
    	success: function() {
    		new MyTrello.Routers.Router({
    			"$rootEl": $("#content")
    		});
    		Backbone.history.start();
    	}
    });
  }
};

$(document).ready(function(){
  MyTrello.initialize();
});
