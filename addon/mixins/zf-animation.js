import Ember from 'ember';

var ZfAnimationMixin = Ember.Mixin.create({
  isActive: false,
  classNameBindings: ['isActive', 'animationEasing', 'animationSpeed'],

  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  animationEasing: 'easeIn',
  animationSpeed: 'slow',

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
    this.$().addClass('ng-enter ' + this.get('animationIn'));
    console.log(1, this.$().attr('class'));
  },

  transitionIn: function(callback) {
    console.log(2, this.$().attr('class'));
    this.$().addClass('ng-enter-active');
    console.log(2, this.$().attr('class'));
    callback();
  },

  didTransitionIn: function() {
    console.log(3, this.$().attr('class'));
    this.$().removeClass('ng-enter ng-enter-active ' + this.get('animationIn'));
    console.log(3, this.$().attr('class'));
  },

  willTransitionOut: function() {
    console.log(-1, this.$().attr('class'));
    this.$().addClass('ng-leave ' + this.get('animationOut'));
    console.log(-1, this.$().attr('class'));
  },

  transitionOut: function(callback) {
    console.log(-2, this.$().attr('class'));
    this.$().addClass('ng-leave-active');
    console.log(-2, this.$().attr('class'));
    callback();
  },

  didTransitionOut: function() {
    this.set('isActive', false);
    console.log(-3, this.$().attr('class'));
    this.$().removeClass('ng-leave ng-leave-active ' + this.get('animationOut'));
    console.log(-3, this.$().attr('class'));
  }
});

export default ZfAnimationMixin;
