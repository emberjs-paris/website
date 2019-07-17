import Controller from '@ember/controller';
import { inject } from '@ember/service';
import config from '../config/environment';

export default Controller.extend({
  session: inject(),
  config: config.torii.providers['github-oauth2'],

  actions: {
    logout() {
      this.session.invalidate();
    }
  }
});

