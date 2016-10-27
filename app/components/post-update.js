import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(rental) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        date: this.get('date'),
        image: this.get('image'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
