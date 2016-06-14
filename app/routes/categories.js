import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [ 'Arts', 'Design', 'Technology', 'Travel', 'Business', 'Music',
             'Food', 'Sports', 'Photography', 'World', 'Education', 'Humor'];
  }
});
