import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import fetch from 'fetch';

export default Route.extend({
  intl: inject(),
  beforeModel() {
    return this.loadLocales('en-us');
  },
  loadLocales(locale) {
    return fetch(`/assets/intl/translations/${locale}.json`)
      .then(response => response.json())
      .then(locales => {
        return this.get('intl').addTranslations(locale, locales);
      })
      .then(() => this.get('intl').setLocale([locale]));
  }
});
