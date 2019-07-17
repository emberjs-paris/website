import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import { inject } from '@ember/service';
import config from '../config/environment';

export default ToriiAuthenticator.extend({
  torii: inject(),
  ajax: inject(),

  authenticate() {
    const ajax = this.ajax;
    const tokenExchangeUri =
      config.torii.providers['github-oauth2'].tokenExchangeUri;

    console.log(tokenExchangeUri)
    return this._super(...arguments).then(data => {
      return ajax
        .request(tokenExchangeUri, {
          type: 'POST',
          crossDomain: true,
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify({
            authorizationCode: data.authorizationCode
          })
        })
        .then(response => {
          return {
            access_token: JSON.parse(response).access_token,
            provider: data.provider
          };
        });
    });
  }
});
