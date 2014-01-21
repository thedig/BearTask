MyTrello.Views.CardModalShow = Backbone.View.extend({
	template: JST['cards/modal_show'],
	className: "cardModalDiv",
	id: function(){
		return "cardModal" + this.model.get('position')
	},

	events: {
		"click .deleteCard": "cardDelete"
	},

	cardDelete: function(event){
		event.preventDefault();
		// check for delete?
		this.model.destroy({
			success: function(model, response){
				// $(this).find(".close").click();
				// $.modal.close();
				// $(".close").click();
				console.log("maybe?");
			}
		});
	},

	render: function(){
		this.$el.html(this.template({card: this.model}));

		return this;
	}

})