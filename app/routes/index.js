import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.query("meetup-event", {
      status: "past,upcoming"
    });
  }
});
