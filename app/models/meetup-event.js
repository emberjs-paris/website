import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  status: DS.attr(),
  description: DS.attr(),
  link: DS.attr(),
  local_date: DS.attr()
});
