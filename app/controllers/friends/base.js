import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.firstName',
    'model.lastName',
    'model.email',
    'model.twitter',
    {
      get() {
        return !Ember.isEmpty(this.get('model.email')) &&
               !Ember.isEmpty(this.get('model.firstName')) &&
               !Ember.isEmpty(this.get('model.lastName')) &&
               !Ember.isEmpty(this.get('model.twitter'));
      }
    }
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((friend)=> {
          this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessasge', 'You have to fill all the fields');
      }

      return false;
    },
    cancel() {
      return true;
    }
  }
});
