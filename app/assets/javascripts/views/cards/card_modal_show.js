MyTrello.Views.CardModalShow = Backbone.View.extend({
	template: JST['cards/modal_show'],
	className: "cardModalDiv",
	id: function(){
		return "cardModal" + this.model.get('position')
	},

	events: {
		"click .deleteCard": "cardDelete",
		"click .dueDate": "dueDateChange"
	},

	cardDelete: function(event){
		event.preventDefault();
		// check for delete?
		this.model.destroy({
			success: function(model, response){
				// $(this).find(".close").click();
				$("#card-modal").modal('hide');
				$("body").removeClass('modal-open');
				$('.modal-backdrop').remove();
				// $(".close").click();
				console.log(response);
				// Backbone.history.navigate("#", {trigger: true});
			}
		});
	},

	dueDateChange: function(event){
		var view = new MyTrello.Views.DueDate({model: this.model});
		$(#dueField).html(view.render().$el);
	},

	render: function(){
		this.$el.html(this.template({card: this.model}));

		return this;
	}

});