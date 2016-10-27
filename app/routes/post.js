import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    delete(post) {
      if(confirm('Are you sure you want to delete this  post?')) {
        //since we are not using a component (tile), no need to send action 'destroyPost'. instead we can just do destroyPost here!
        return post.destroyRecord();
      }
      this.transitionTo('index');
    }
  }
});
