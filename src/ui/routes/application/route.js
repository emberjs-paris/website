import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import fetch from 'fetch';
import log from 'loglevel';

const LOCALES = {
  'fr-fr': '/assets/intl/translations/fr-fr.json',
  'en-us': '/assets/intl/translations/en-us.json'
};

export default Route.extend({
  intl: inject(),
  fastboot: inject(),
  beforeModel() {
    return this.loadLocales('en-us');
  },
  loadLocales(locale) {
    return fetch(this.getLocaleURL(locale))
      .then(response => response.json())
      .then(locales => this.get('intl').addTranslations(locale, locales))
      .then(() => this.get('intl').setLocale([locale]))
      .catch(err => log.error(err));
  },
  getLocaleURL(locale) {
    let fastboot = this.get('fastboot');
    let path = LOCALES[locale];
    let host = fastboot.get('isFastBoot')
      ? `${fastboot.get('request.protocol')}//${fastboot.get('request.host')}`
      : '';
    return `${host}${path}`;
  }
});
