import Ember from 'ember';
import ZfAnimationMixin from '../mixins/zf-animation';

var ZfTabItemComponent = Ember.Component.extend( ZfAnimationMixin, {
  classNames: ['tab-item'],

  click: function() {
    this.get('parentView').send('toggleChild', this);
  }
});

export default ZfTabItemComponent;
