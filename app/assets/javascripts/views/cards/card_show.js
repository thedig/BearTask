MyTrello.Views.CardShow = Backbone.View.extend({
	template: JST['cards/show'],
	className: "cardDiv",
	id: function(){
		return "card" + this.model.get('position');
	},

	attributes: function(){
		return {"data-id": this.model.get('position')};
	},

	initialize: function() {
		this.listenTo(this.model, "reset", this.render);
	},

	events: {
		"click .cardLink": "cardOpen",
		"click #deleteCard": "cardDelete"
	},

	cardDelete: function(event){
		event.preventDefault();
		this.model.destroy({
			success: function() {
				// Backbone.history.navigate("/", {trigger: true});
			}
		});
	
	},

	cardOpen: function(event){
		event.preventDefault();
		var cardShow = new MyTrello.Views.CardModalShow({model: this.model});
		this.$el.find(".modal-content").html(cardShow.render().$el);
		this.$('#card-modal').modal('show');
	},

	render: function() {
		this.$el.html(this.template({card: this.model}));

		return this;
	}

})