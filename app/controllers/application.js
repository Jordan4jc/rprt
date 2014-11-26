import Ember from 'ember';

export default Ember.Controller.extend({
	monthToParse: null,
	yearToParse: null,

	fullDateToParse: function() {
		// set array to month names
		var monthNames = [ "January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December" ];
		// set a variable to a new date object
		var date = new Date();
		// set the month to the previous month and return that
		date.setMonth(date.getMonth() - 1);
		// set the controller properties for use in other parts of the app
		this.set('monthToParse', monthNames[date.getMonth()]);
		this.set('yearToParse', date.getFullYear());

		return this.get('monthToParse') + ' ' + this.get('yearToParse');
	}.property('monthToParse', 'yearToParse'),

	actions: {
		toggleOptions: function() {
			Ember.$('nav.options-bar').toggleClass('closed');
		}
	}
});
