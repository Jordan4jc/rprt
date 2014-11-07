import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		toggleOptions: function() {
			Ember.$('nav.options-bar').toggleClass('closed');
		}
	}
});
