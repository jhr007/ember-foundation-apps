import Ember from 'ember';

var ZfTabsComponent = Ember.Component.extend({
  classNames: ['tabs-container'],
  autoOpen: true,

  actions: {
    toggleChild: function(item) {
      var v = this, contents;
      v.get('childViews').forEach(function(i, index) {
        contents = v.$().find('.tab-contents').children().eq(index);
        if ( item === i ) {
          contents.toggleClass('is-active');
          i.toggleProperty('isActive');
        } else {
          contents.removeClass('is-active');
          i.set('isActive', false);
        }
      });
    }
  },

  didInsertElement: function() {
    var v = this, content;
    Ember.$(document).ready(function(){
      v.$().find('.tab-item').each(function(){
        content = Ember.$(this).find('.tab-content');
        v.$().find('.tab-contents').append(content.clone());
        content.remove();
      });
    });
  }
});

export default ZfTabsComponent;
