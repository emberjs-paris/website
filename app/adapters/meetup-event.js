import DS from "ember-data";

export default DS.RESTAdapter.extend({
  host: "https://api.meetup.com",

  urlForQuery() {
    return `${this.host}/Paris-EmberJS-Lab/events`;
  },

  ajaxOptions(url, type, options) {
    var hash = this._super(url, type, options);
    hash.dataType = "jsonp";
    return hash;
  }
});
