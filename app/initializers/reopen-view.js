import Ember from 'ember';

export default {
  name: 'reopen-view',
  initialize: function() {
    Ember.View.reopen({
      transitionSpeed: 500,

      willTransitionIn: Ember.K,
      transitionIn: Ember.K,
      didTransitionIn: Ember.K,

      willTransitionOut: Ember.K,
      transitionOut: Ember.K,
      didTransitionOut: Ember.K,

      isTransitioningIn: false,
      isTransitioningOut: false,

      hasTransitionedIn: false,
      hasTransitionedOut: true,

      toggle: function() {
        return ( this.get('isActive') ) ? this.leave() : this.enter();
      },

      enter: function() {
        var v = this;
        if ( ! this.get('isDestroyed') && this.get('hasTransitionedOut') ) {
          Ember.run.scheduleOnce('afterRender', v, function() {
            Ember.run.schedule('sync', v, function() {
              v.willTransitionIn();
              v.set('isTransitioningIn', true);
            });

            Ember.run.next(v, v.transitionIn, function() {
              v.set('isTransitioningIn', false);
              v.set('hasTransitionedIn', true);
              v.set('hasTransitionedOut', false);

              Ember.run.later(v, v.didTransitionIn, v.get('transitionSpeed') - 1);
            });
          });
        }
      },

      leave: function() {
        var v = this;
        if ( ! this.get('isDestroyed') && this.get('hasTransitionedIn') ) {

          Ember.run.scheduleOnce('afterRender', v, function() {
            Ember.run.schedule('sync', v, function() {
              v.willTransitionOut();
              v.set('isTransitioningOut', true);
            });

            Ember.run.next(v, v.transitionOut, function() {
              v.set('isTransitioningOut', false);
              v.set('hasTransitionedOut', true);
              v.set('hasTransitionedIn', false);

              Ember.run.later(v, v.didTransitionOut, v.get('transitionSpeed') - 1);
            });
          });
        }
      }
    });
  }
};