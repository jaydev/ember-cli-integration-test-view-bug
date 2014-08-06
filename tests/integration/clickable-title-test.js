import Ember from 'ember';
import {test} from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('View - Clickable Title', {
	setup: function() {
		App = startApp();
		visit('/');
	},
	teardown: function() {
		Ember.run(App, App.destroy);
	}
});

test('changes the title color on click', function() {
	console.log(Ember.View.views);

	andThen(function() {
		equal(Ember.$('h3').css('color'), 'rgb(0, 0, 0)', 'color should be black');
	});

	triggerEvent('h3', 'mousedown');

	andThen(function() {
		equal(Ember.$('h3').css('color'), 'rgb(255, 0, 0)', 'color should be red');
	});
});
