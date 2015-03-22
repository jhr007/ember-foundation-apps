import Ember from 'ember';
import ZfAnimationMixin from '../mixins/zf-animation';

var ZfNotificationComponent = Ember.Component.extend( ZfAnimationMixin, {
  classNameBindings: ['typeClass', 'position'],

  type: 'static',
  isDynamic: Ember.computed.equal('type', 'dynamic'),
  typeClass: (function() {
    var className;
    switch (this.get('type')) {
      case 'static':
        className = 'static-notification';
      break;

      case 'dynamic':
        className = 'notification-container';
      break;

      case 'child':
        className = 'notification';
      break;
    }

    return className;
  }).property('type'),

  title: "",
  image: false,
  position: 'top-right',
  notifications: Ember.ArrayProxy.create(),
});

export default ZfNotificationComponent;
