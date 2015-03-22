import Ember from 'ember';

var ZfIconicComponent = Ember.Component.extend({
  tagName: 'img',
  classNames: ['iconic'],
  classNameBindings: ['iconClass', 'colorClass', 'sizeClass'],
  attributeBindings: ['iconSrc:src'],

  iconSrc: (function() {
    var icon = 'assets/img/iconic/' + this.get('icon') + '.svg';
    return icon;
  }).property('icon'),

  icon: '',
  iconClass: (function() {
    return 'iconic-' + this.get('icon');
  }).property('icon'),

  color: '',
  colorClass: (function() {
    return 'iconic-color-' + this.get('color');
  }).property('color'),

  size: '',
  sizeClass: (function() {
    var sizes = {
      small: 'sm',
      medium: 'md',
      large: 'lg'
    };
    return 'iconic-' + sizes[this.get('size')];
  }).property('size'),
});

export default ZfIconicComponent;
