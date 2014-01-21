MyTrello.Views.CardModalShow = Backbone.View.extend({
	template: JST['cards/modal_show'],
	className: "cardModalDiv",
	id: function(){
		return "cardModal" + this.model.get('position')
	},

	events: {
		"click .deleteCard": "cardDelete",
		"click #dueField": "dueDateChange"
	},

	cardDelete: function(event){
		console.log('delete card clicked')
		event.preventDefault();
		this.model.destroy({
			success: function(model, response){
				$("#card-modal").modal('hide');
				$("body").removeClass('modal-open');
				$('.modal-backdrop').remove();
			}
		});
	},

	dueDateChange: function(event){
		console.log('changing due date')
		var view = new MyTrello.Views.DueDate({model: this.model});
		$(event.currentTarget.parentNode).html(view.render().$el);
	},

	render: function(){
		this.$el.html(this.template({card: this.model}));
		return this;
	}

});