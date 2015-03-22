import Ember from 'ember';
import ZfAnimationMixin from '../mixins/zf-animation';

var ZfPanelComponent = Ember.Component.extend( ZfAnimationMixin, {
  classNames: ['panel'],
  classNameBindings: ['positionClass'],

  position: 'top',
  positionClass: (function() {
    return 'panel-' + this.get('position');
  }).property('position'),

  animationIn: (function() {
    switch (this.get('position')) {
      case 'top':
        return 'slideInDown';
      break;

      case 'bottom':
        return 'slideInUp';
      break;

      case 'left':
        return 'slideInLeft';
      break;

      case 'right':
        return 'slideInRight';
      break;
    }
  }).property('position'),

  animationOut: (function() {
    switch (this.get('position')) {
      case 'top':
        return 'slideOutUp';
      break;

      case 'bottom':
        return 'slideOutDown';
      break;

      case 'left':
        return 'slideOutRight';
      break;

      case 'right':
        return 'slideOutLeft';
      break;
    }
  }).property('position'),
});

export default ZfPanelComponent;
