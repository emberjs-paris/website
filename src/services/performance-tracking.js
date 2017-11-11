import BaseServiceTracking from 'ember-performance-tracking/services/performance-tracking';
import log from 'loglevel';

export default class extends BaseServiceTracking {
  transitionComplete(transitionData) {
    let { destinationRoute, duration, url } = transitionData;
    log.info('[%s] %s - %f s', destinationRoute, url, duration / 1000);
  }
}
