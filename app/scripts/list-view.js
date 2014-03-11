var ListView = Parse.View.extend({

createTemplate: _.template($('#list-template').text()),

	initialize: function(){
		$('.todo-item').append(this.el);

		this.render();

	},

	render: function(){

		var renderedTemplate = this.createTemplate(this.model.attributes);

		this.$el(renderTemplate);
	}
});