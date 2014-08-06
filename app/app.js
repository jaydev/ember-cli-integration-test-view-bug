import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'ember-test-view-bug', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'ember-test-view-bug');

export default App;
