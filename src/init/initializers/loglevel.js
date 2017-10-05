import log from 'loglevel';

export default {
  name: 'loglevel',
  initialize() {
    log.setLevel(log.levels.DEBUG);
  }
};
