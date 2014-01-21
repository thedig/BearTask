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
		this.model.destroy({
			success: function(model, response){
				$("#card-modal").modal('hide');
				$("body").removeClass('modal-open');
				$('.modal-backdrop').remove();
			}
		});
	},

	dueDateChange: function(event){
		var view = new MyTrello.Views.DueDate({model: this.model});
		$(event.currentTarget).find("span").html(view.render().$el);
	},

	render: function(){
		this.$el.html(this.template({card: this.model}));

		return this;
	}

});