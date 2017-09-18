export default {
  name: 'build-branch',
  initialize(app) {
    let branch = app.get('netlifyBuildBranch');
    app.register('build-branch:main', branch || 'dev');
  }
};
