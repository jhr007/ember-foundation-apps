import Ember from 'ember';

var ZfAccordionComponent = Ember.Component.extend({
  classNames: ['accordion'],
  autoOpen: true,

  actions: {
    toggleChild: function(item) {
      this.get('childViews').forEach(function(i){
        if ( item === i ) {
          i.toggleProperty('isActive');
        } else {
          i.set('isActive', false);
        }
      });
    }
  }
});

export default ZfAccordionComponent;
