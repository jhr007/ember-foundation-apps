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
    var className;
    switch (this.get('position')) {
      case 'top':
        className = 'slideInDown';
      break;

      case 'bottom':
        className = 'slideInUp';
      break;

      case 'left':
        className = 'slideInLeft';
      break;

      case 'right':
        className = 'slideInRight';
      break;
    }
    return className;
  }).property('position'),

  animationOut: (function() {
    var className;
    switch (this.get('position')) {
      case 'top':
        className = 'slideOutUp';
      break;

      case 'bottom':
        className = 'slideOutDown';
      break;

      case 'left':
        className = 'slideOutRight';
      break;

      case 'right':
        className = 'slideOutLeft';
      break;
    }
    return className;
  }).property('position'),
});

export default ZfPanelComponent;
