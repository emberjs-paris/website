import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from '../config/environment';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix + '/src/init');

export default App;