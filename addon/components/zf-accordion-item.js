import Ember from 'ember';
import ZfAnimationMixin from '../mixins/zf-animation';

var ZfAccordionItemComponent = Ember.Component.extend( ZfAnimationMixin, {
  classNames: ['accordion-item'],

  actions: {
    toggleItem: function() {
      this.get('parentView').send('toggleChild', this);
    }
  }
});

export default ZfAccordionItemComponent;
