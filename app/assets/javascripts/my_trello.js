window.MyTrello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MyTrello.boards = new MyTrello.Collections.Boards();
    MyTrello.form_authenticity_token = $('#form_authenticity_token').html();
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
