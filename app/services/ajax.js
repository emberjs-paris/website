import AjaxService from 'ember-ajax/services/ajax';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default AjaxService.extend({
  session: inject(),
  trustedHosts: ['api.github.com'],
  headers: computed('session.data.authenticated.access_token', {
    get() {
      let headers = {};
      const authToken = this.session.data.authenticated.access_token;
      if (authToken) {
        headers['Authorization'] = `token ${
          this.session.data.authenticated.access_token
        }`;
      }
      return headers;
    }
  })
});
