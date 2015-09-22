import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveArticle() {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        date: this.get('date'),
        category: this.get('category'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.sendAction('saveArticle', params)
    }
  }
});
