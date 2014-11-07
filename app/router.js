import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('title');
  this.route('page-01');
  this.route('page-02');
});

export default Router;
