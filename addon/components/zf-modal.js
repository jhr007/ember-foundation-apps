import Ember from 'ember';
import ZfAnimationMixin from '../mixins/zf-animation';

var ZfModalComponent = Ember.Component.extend( ZfAnimationMixin, {
  classNameBindings: ['calculatedClass'],

  calculatedClass: (function() {
    if ( this.get('isOverlay') ) {
      return 'modal-overlay';
    } else {
      return 'modal';
    }
  }).property('isOverlay'),

  animationIn: 'fadeIn',
  animationOut: 'fadeOut',

  isOverlay: true,

  enter: function() {
    this._super();
    this.get('childViews').forEach(function(item){
      item.enter();
    });
  },
  leave: function() {
    this._super();
    this.get('childViews').forEach(function(item){
      item.leave();
    });
  }
});

export default ZfModalComponent;
