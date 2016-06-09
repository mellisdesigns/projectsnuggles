import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('categories', { path: '/' });
  this.route('articles');
  this.route('article', { path: '/article/:article_id' } );
});

export default Router;
