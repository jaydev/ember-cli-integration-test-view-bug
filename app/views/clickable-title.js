import Ember from 'ember';

var ClickableTitleView = Ember.View.extend({
	tagName: 'h3',

	mouseDown: function() {
		this.$().css('color', 'red');
	}
});

export default ClickableTitleView;
