import Ember from 'ember';

export default Ember.Route.extend({
  controller: this.controller,
  actions: {
    saveArticleRecord(){

      const tags = this.get('controller.tag').w();
      const tagRecords = Ember.A([]);

      tags.forEach((tagName) => {
        debugger;
        this.get('store').query('tag', { label: tagName }).then((results) => {
          debugger;
        });
      });

      /*for (var tag of tags) {
        let tagRecord = this.get('store').createRecord('tag', {
          label: tag
        });
        tagRecord.save();
        tagRecords.push(tagRecord);
      }*/

      const article = this.get('store').createRecord('article', {
        title:    this.get('controller.title'),
        content:  this.get('controller.content'),
        tags:     tagRecords
      });

      article.save().then((data) => {
        this.transitionTo('articles');
      }, (error) => {

      })
    }
  }
});
