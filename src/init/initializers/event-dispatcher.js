import EventDispatcher from 'ember-native-dom-event-dispatcher';

export default {
  name: 'event-dispatcher',
  initialize(app) {
    app.register('event_dispatcher:main', EventDispatcher);
  }
};
