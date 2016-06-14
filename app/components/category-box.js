import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['category-box'],
  classNameBindings: ['category.isSelected:category-box--selected'],

  click() {
    let category = this.get('category');
    category.toggleProperty('isSelected');
  }
});
