import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('articles');
  this.route('article', function() {
    this.route('index', {path: '/:id'});
    this.route('new', {path: '/new'});
  });
  this.route('categories', { path: '/' });
});

export default Router;
