import Ember from 'ember';
import UiMixin from 'ember-foundation-apps/mixins/ui';

module('UiMixin');

// Replace this with your real tests.
test('it works', function() {
  var UiObject = Ember.Object.extend(UiMixin);
  var subject = UiObject.create();
  ok(subject);
});
