import Ember from 'ember';

var ZfButton = Ember.Component.extend({
  classNames: ['action-button'],
  tagName: 'button',

  action: 'toggle',
  targetId: false,
  targetType: false,
  targetElement: null,

  click: function() {
    var v;
    if ( this.get('targetElement') === null ) {
      var id = this.get('targetId');
      if ( ! id ) return false;

      if ( Ember.View.views.hasOwnProperty(id) ) {
        v = Ember.View.views[id];
        this.set('targetElement', v);
      }
    } else {
      v = this.get('targetElement')
    }
    switch (this.get('action')) {
      case 'toggle':
        v.toggle();
      break;

      case 'open':
        v.enter();
      break;

      case 'close':
        v.leave();
      break;
    }
    return false;
  }
});

export default ZfButton;
