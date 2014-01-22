MyTrello.Views.CardModalShow = Backbone.View.extend({
	template: JST['cards/modal_show'],
	className: "cardModalDiv",
	id: function(){
		return "cardModal" + this.model.get('position');
	},

	events: {
		"click .deleteCard": "cardDelete",
		"click #dueField": "dueDateChange"
	},

	initialize: function(){
		this.listenTo(this.model, "change:due_date", this.render);
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
		$(event.currentTarget.parentNode).html(view.render().$el);
	},

	render: function(){
		this.$el.html(this.template({card: this.model}));
		return this;
	}

});