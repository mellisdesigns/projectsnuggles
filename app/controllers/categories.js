import Ember from 'ember';
const { Controller, computed } = Ember;
const EmberObject = Ember.Object;

export default Controller.extend({
  categories: computed('model', function() {
    let categories = this.get('model');
    return categories.map(cat => {
      return EmberObject.create({
        name: cat,
        isSelected: false
      });
    });
  }),

  actions: {
    goToArticles() {
      let selected = this.get('categories').filterBy('isSelected');
      selected = selected.mapBy('name');
      console.log(selected);
      this.transitionToRoute('articles', { queryParams: { categories: selected }});
    }
  }
});
