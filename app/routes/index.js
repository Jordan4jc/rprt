import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    return Ember.$.getJSON('http://127.0.0.1:3000/api');
  }
});
