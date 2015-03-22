import Ember from 'ember';

var ZfAnimationMixin = Ember.Mixin.create({
  isActive: false,
  classNameBindings: ['isActive', 'animationEasing', 'animationSpeed'],

  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  animationEasing: 'easeIn',
  animationSpeed: 'slow',

  initClasses: ['ng-enter', 'ng-leave'],
  transitionClasses: ['ng-enter-active', 'ng-leave-active'],

  transitionSpeed: (function() {
    var speeds = {
      'slow': 750,
      'default': 500,
      'fast': 250,
    };
    return speeds[this.get('animationSpeed')];
  }).property('animationSpeed'),

  willTransitionIn: function() {
    this.set('isActive', true);
    console.log(1, this.$().attr('class'));
    this.$().addClass(this.get('initClasses.firstObject') + ' ' + this.get('animationIn'));
    console.log(1, this.$().attr('class'));
  },

  transitionIn: function(callback) {
    console.log(2, this.$().attr('class'));
    this.$().addClass(this.get('transitionClasses.firstObject'));
    console.log(2, this.$().attr('class'));
    callback();
  },

  didTransitionIn: function() {
    console.log(3, this.$().attr('class'));
    this.$().removeClass(this.get('initClasses.firstObject') +  ' ' + this.get('transitionClasses.firstObject') + ' ' + this.get('animationIn'));
    console.log(3, this.$().attr('class'));
  },

  willTransitionOut: function() {
    console.log(-1, this.$().attr('class'));
    this.$().addClass(this.get('initClasses.lastObject') + ' ' + this.get('animationOut'));
    console.log(-1, this.$().attr('class'));
  },

  transitionOut: function(callback) {
    console.log(-2, this.$().attr('class'));
    this.$().addClass(this.get('transitionClasses.lastObject'));
    console.log(-2, this.$().attr('class'));
    callback();
  },

  didTransitionOut: function() {
    this.set('isActive', false);
    console.log(-3, this.$().attr('class'));
    this.$().removeClass(this.get('initClasses.lastObject') + ' ' + this.get('transitionClasses.lastObject') + ' ' + this.get('animationOut'));
    console.log(-3, this.$().attr('class'));
  }
});

export default ZfAnimationMixin;
